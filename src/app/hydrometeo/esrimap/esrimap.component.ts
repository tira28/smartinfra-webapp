import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as esriLoader from 'esri-loader';
import { esriModules } from './mapconfig/createMap';


@Component({
  selector: 'app-esrimap',
  templateUrl: './esrimap.component.html',
  styleUrls: ['./esrimap.component.scss']
})
export class EsrimapComponent implements OnInit {
  @ViewChild('mapRef', {read: ElementRef}) mapRef: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    this.createMap();
  }

  private createMap(): any {

    let renderMap: any = (
      esriConfig,
      Map,
      MapView,
      TileLayer,
      Graphic,
      Point,
      SpatialReference,
      Extent
    ) => {

      const basemapUrl: string = 'https://tiles.arcgis.com/tiles/lQWQklF3MTod4sFp/arcgis/rest/services/Portmaps_Basemap_large/MapServer';

      /* enable cors server */
      esriConfig.request.corsEnabledServers.push(
        basemapUrl
      );

      /* creating port basemap layer */
      let portMapLayer = new TileLayer({
        url: basemapUrl,
        title: 'Port of Rotterdam',
        id: 'map_PoR'
      });

      /* create spatial reference specific for the Netherlands */
      let EPSG_28992: any = new SpatialReference({
        wkid: 28992,
        wkt: 'Amersfoort / RD New'
      });

      /* creating point geometry */
      let myPoint: any = new Point({
        spatialReference: EPSG_28992,
        type: 'point',
        x: 61155.35,
        y: 442770.851
      });

      /* creating symbol */
      let pointSymbol = {
        type: 'simple-marker',
        style: 'simple-marker',
        color: 'blue',
        size: '12px'
      };

      /* creating attribute */
      let pointAttribute = {
        name: 'WSP01X1',
        description: 'A water level sensor',
        owner: 'Port of Rotterdam'
      };

      /* creating point graphic */
      let pointGraphic = new Graphic({
        geometry: myPoint,
        symbol: pointSymbol,
        attributes: pointAttribute,
        popupTemplate: {
          title: '{description}',
          content: [{
            type: 'fields',
            fieldInfos: [{
              fieldName: 'name'
            }, {
              fieldName: 'description'
            }]
          }]
        }

      });

      /* creating basemap without basemap layer
             * as setting basemap return in error */
      let baseMap: any = new Map();
      baseMap.layers.add(portMapLayer);

      const node: any = this.mapRef.nativeElement;

      let mapViewer: any = new MapView({
        container: node,
        map: baseMap,
        center: new Point({
          x: 80969.0,
          y: 434203.0,
          spatialReference: EPSG_28992
        })
      });

      /* setting map extent */
      mapViewer.extent = new Extent({
        spatialReference: EPSG_28992,
        xmax: 146110.19661798334,
        xmin: 15150.352510795066,
        ymax: 474745.9994069088,
        ymin: 400379.61161163315
      });

      /* setting default zoom */
      mapViewer.scale = 192000;

      /* add point graphic */
      mapViewer.graphics.add(pointGraphic);

      return mapViewer;
    };

    return esriLoader.dojoRequire(esriModules, renderMap);
  }
}
