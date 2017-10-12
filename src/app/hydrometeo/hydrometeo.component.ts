import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hydrometeo',
  templateUrl: './hydrometeo.component.html',
  styleUrls: ['./hydrometeo.component.scss']
})
export class HydrometeoComponent implements OnInit {
  public title: string;
  constructor() {
    this.title = 'HydroMeteo App';
  }

  ngOnInit() {
  }

}
