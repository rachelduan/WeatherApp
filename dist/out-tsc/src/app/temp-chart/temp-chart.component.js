import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let TempChartComponent = class TempChartComponent {
    constructor() {
        this.tempLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
        this.presOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.tempLegend = true;
        this.tempChartType = 'bar';
    }
    ngOnInit() {
        console.log(this.hourly_data);
        let array = new Array(24);
        for (let i = 0; i < 24; i++) {
            array[i] = this.hourly_data[i].temperature;
        }
        this.hourlyTemp = [
            { data: array, label: 'temperature' }
        ];
    }
};
tslib_1.__decorate([
    Input()
], TempChartComponent.prototype, "hourly_data", void 0);
TempChartComponent = tslib_1.__decorate([
    Component({
        selector: 'app-temp-chart',
        templateUrl: './temp-chart.component.html',
        styleUrls: ['./temp-chart.component.css']
    })
], TempChartComponent);
export { TempChartComponent };
//# sourceMappingURL=temp-chart.component.js.map