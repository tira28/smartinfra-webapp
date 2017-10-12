import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HydrometeoComponent } from './hydrometeo.component';
import { EsrimapComponent } from './esrimap/esrimap.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HydrometeoComponent,
    EsrimapComponent
  ],
  exports: [
    HydrometeoComponent
  ]
})
export class HydrometeoModule { }
