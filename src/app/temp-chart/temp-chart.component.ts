import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temp-chart',
  templateUrl: './temp-chart.component.html',
  styleUrls: ['./temp-chart.component.css']
})
export class TempChartComponent implements OnInit {
  @Input() hourly_data: JSON;
  hourlyTemp
  tempLabels = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

  presOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  tempLegend = true;

  tempChartType = 'bar';

  constructor() { 
    
  }

  ngOnInit() {
    console.log(this.hourly_data);
    let array = new Array<number>(24);
    for (let i=0; i<24; i++) {
      array[i] = this.hourly_data[i].temperature;
    }
    this.hourlyTemp = [
      {backgroundColor: 'rgb(122,200,242)',
       data: array, 
       label: 'temperature'}
    ]
  }

}
