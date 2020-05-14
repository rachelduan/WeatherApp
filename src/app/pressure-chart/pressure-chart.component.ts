import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pressure-chart',
  templateUrl: './pressure-chart.component.html',
  styleUrls: ['./pressure-chart.component.css']
})
export class PressureChartComponent implements OnInit {
  @Input() hourly_data: JSON;
  hourlyPres

  presLabels = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

  presOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  presLegend = true;
  presChartType = 'bar';

  constructor() { }

  ngOnInit() {
    let array = new Array<number>(24);
    for (let i=0; i<24; i++) {
      array[i] = this.hourly_data[i].pressure;
    }
    this.hourlyPres = [
      { backgroundColor: 'rgb(122,200,242)',
        data: array, 
        label: 'pressure'}
    ]

  }

}
