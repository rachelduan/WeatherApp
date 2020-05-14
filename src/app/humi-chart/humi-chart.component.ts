import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-humi-chart',
  templateUrl: './humi-chart.component.html',
  styleUrls: ['./humi-chart.component.css']
})
export class HumiChartComponent implements OnInit {
  @Input() hourly_data: JSON;

  hourlyHumi

  humiLabels = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

  humiOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  humiLegend = true;
  humiChartType = 'bar';

  constructor() { }

  ngOnInit() {
    let array = new Array<number>(24);
    for (let i=0; i<24; i++) {
      array[i] = this.hourly_data[i].humidity;
    }
    this.hourlyHumi = [
      { backgroundColor: 'rgb(122,200,242)',
        data: array, 
        label: 'humidity'}
    ]
  }

}
