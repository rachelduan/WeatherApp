import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
let NgbdModalContent = class NgbdModalContent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
};
tslib_1.__decorate([
    Input()
], NgbdModalContent.prototype, "name", void 0);
NgbdModalContent = tslib_1.__decorate([
    Component({
        selector: 'ngbd-modal-content',
        template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
    })
], NgbdModalContent);
export { NgbdModalContent };
let WeeklyComponent = class WeeklyComponent {
    constructor(modalService, geoService) {
        this.modalService = modalService;
        this.geoService = geoService;
    }
    ngOnInit() {
        console.log(this.weekly);
        let data_ = [];
        for (let i = 6; i >= 0; i--) {
            let day = this.weekly[i];
            let y1 = Math.round(day.temperatureLow);
            let y2 = Math.round(day.temperatureHigh);
            let time = new Date(day.time);
            let y = time.getFullYear();
            let m = time.getMonth() + 1;
            let d = time.getDate();
            data_.push({
                x: 6 - i,
                y: [y1, y2],
                label: '' + d + '/' + m + '/' + y
            });
        }
        var chart = new CanvasJS.Chart("chartContainer", {
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
                    click: (e) => {
                        this.geoService.getWeekly(this.latitude, this.longitude, this.weekly[e.dataPoint.x]['time']).subscribe(resp => {
                            console.log(resp);
                            const modalRef = this.modalService.open(NgbdModalContent);
                            modalRef.componentInstance.name = 'World';
                            console.log(this.weeklyCity);
                            console.log(resp['currently'].temperature);
                            console.log(resp['currently'].icon);
                            console.log(resp['currently'].precipIntensity);
                            console.log(resp['currently'].precipProbability);
                            console.log(resp['currently'].windSpeed);
                            console.log(resp['currently'].humidity);
                            console.log(resp['currently'].visibility);
                        });
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
        function openDialog(e) {
            alert(e.dataSeries.type + ", dataPoint { x:" + e.dataPoint.x + ", y: " + e.dataPoint.y + " }" + this.city + this.temperature);
        }
    }
};
tslib_1.__decorate([
    Input()
], WeeklyComponent.prototype, "weekly", void 0);
tslib_1.__decorate([
    Input()
], WeeklyComponent.prototype, "latitude", void 0);
tslib_1.__decorate([
    Input()
], WeeklyComponent.prototype, "longitude", void 0);
tslib_1.__decorate([
    Input()
], WeeklyComponent.prototype, "weeklyCity", void 0);
WeeklyComponent = tslib_1.__decorate([
    Component({
        selector: 'app-weekly',
        templateUrl: './weekly.component.html',
        styleUrls: ['./weekly.component.css']
    })
], WeeklyComponent);
export { WeeklyComponent };
//# sourceMappingURL=weekly.component.js.map