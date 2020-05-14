import { WeeklyDialogComponent } from './../weekly-dialog/weekly-dialog.component';
import { SearchFormService } from './../search-form.service';
import { Component, OnInit, Input } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'ngbd-modal-content',
//   template: `
//     <div class="modal-header">
//       <h4 class="modal-title">Hi there!</h4>
//       <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
//         <span aria-hidden="true">&times;</span>
//       </button>
//     </div>
//     <div class="modal-body">
//       <p>Hello, {{name}}!</p>
//     </div>
//     <div class="modal-footer">
//       <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
//     </div>
//   `
  
// })
// export class NgbdModalContent {
//   @Input() name;

//   constructor(public activeModal: NgbActiveModal) {}
// }

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {
  @Input() weeklyResult:JSON;
  @Input() latitude: number;
  @Input() longitude: number;
  @Input() weeklyCity;

  constructor(private modalService: NgbModal, private geoService: SearchFormService) { }

  ngOnInit() {
    let data_ = [];
    for (let i=6; i>=0; i--) {
      let day = this.weeklyResult[i];
      console.log(this.weeklyResult);
      console.log(day);
      let y1 = Math.round(day.temperatureLow);
      let y2 = Math.round(day.temperatureHigh);
      let time = new Date(day.time * 1000);
      let y = time.getFullYear();
      let m = time.getMonth() + 1;
      let d = time.getDate();
      data_.push({
        x: 6-i,
        y: [y1, y2],
        label: '' + d + '/' + m + '/' + y
      })
    }

    var chart = null;
    setTimeout(() => {
      chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Weekly Weather"
        },
        axisX: {
          title: "Days"
        },
        axisY: {
          includeZero: false,
          title: "Temperature in Fahrenheit",
          interval: 10
        }, 
        data: [{
          type: "rangeBar",
          color: "rgb(138, 198, 238)",
          dataPointWidth: 10,
          click: (e) =>  {
            
            this.geoService.getWeekly(this.latitude, this.longitude, this.weeklyResult[e.dataPoint.x]['time']).subscribe(resp => {
              console.log(resp);
              const modalRef = this.modalService.open(WeeklyDialogComponent);
              modalRef.componentInstance.name = this.weeklyCity;
              
            })
            
            
          },
          showInLegend: true,
          //yValueFormatString: "$#0.#K",
          indexLabel: "{y[#index]}",
          legendText: "Day wise temperature range",
          toolTipContent: "<b>{label}</b>: {y[0]} to {y[1]}",
          // dataPoints: [
          //   { x: 10, y:[0, 115], label: "Data Scientist" },
          //   { x: 20, y:[95, 141], label: "Product Manager" },
          //   { x: 30, y:[98, 115], label: "Web Developer" },
          //   { x: 40, y:[90, 160], label: "Software Engineer" },
          //   { x: 50, y:[100,152], label: "Quality Assurance" }
          // ]
          dataPoints: data_
        }]
  
      });

      chart.render();

    }, 2000);
    
  
    function openDialog(e) {

      alert(  e.dataSeries.type + ", dataPoint { x:" + e.dataPoint.x + ", y: "+ e.dataPoint.y + " }" + this.city + this.temperature);

    }
      
  }


}
