import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vis-chart',
  templateUrl: './vis-chart.component.html',
  styleUrls: ['./vis-chart.component.css']
})
export class VisChartComponent implements OnInit {
  @Input() hourly_data: JSON;
  hourlyVis
  visLabels = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

  visOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  visLegend = true;

  visChartType = 'bar';
  constructor() { }

  ngOnInit() {
    let array = new Array<number>(24);
    for (let i=0; i<24; i++) {
      array[i] = this.hourly_data[i].visibility;
    }
    this.hourlyVis = [
      { backgroundColor: 'rgb(122,200,242)',
        data: array, 
        label: 'visiility'}
    ]
  }

}
