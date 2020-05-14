import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ozone-chart',
  templateUrl: './ozone-chart.component.html',
  styleUrls: ['./ozone-chart.component.css']
})
export class OzoneChartComponent implements OnInit {
  @Input() hourly_data: JSON;
  hourlyOzone

  ozoneLabels = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

  ozoneOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  ozoneLegend = true;
  ozoneChartType = 'bar';
  constructor() { }

  ngOnInit() {
    let array = new Array<number>(24);
    for (let i=0; i<24; i++) {
      array[i] = this.hourly_data[i].ozone;
    }
    this.hourlyOzone = [
      { backgroundColor: 'rgb(122,200,242)',
        data: array, 
        label: 'ozone'}
    ]
  }

}
