import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-esrimap',
  templateUrl: './esrimap.component.html',
  styleUrls: ['./esrimap.component.scss']
})
export class EsrimapComponent implements OnInit {
  @ViewChild('tref', {read: ElementRef}) tref: ElementRef;
  constructor() { }

  ngOnInit(): void {
    console.log('log: ', this.tref.nativeElement);
  }

}
