import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wind-chart',
  templateUrl: './wind-chart.component.html',
  styleUrls: ['./wind-chart.component.css']
})
export class WindChartComponent implements OnInit {
  @Input() hourly_data: JSON;
  hourlyWind;
  windLabels = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

  windOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  windLegend = true;

  windChartType = 'bar';
  constructor() { }

  ngOnInit() {
    let array = new Array<number>(24);
    for (let i=0; i<24; i++) {
      array[i] = this.hourly_data[i].windSpeed;
    }
    this.hourlyWind = [
      {data: array, 
      backgroundColor: 'rgb(122,200,242)',
      label: 'wind speed'}
    ]
  }

}
