import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let PressureChartComponent = class PressureChartComponent {
    constructor() {
        this.presLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
        this.presOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.presLegend = true;
        this.presChartType = 'bar';
    }
    ngOnInit() {
        let array = new Array(24);
        for (let i = 0; i < 24; i++) {
            array[i] = this.hourly_data[i].pressure;
        }
        this.hourlyPres = [
            { data: array, label: 'pressure' }
        ];
    }
};
tslib_1.__decorate([
    Input()
], PressureChartComponent.prototype, "hourly_data", void 0);
PressureChartComponent = tslib_1.__decorate([
    Component({
        selector: 'app-pressure-chart',
        templateUrl: './pressure-chart.component.html',
        styleUrls: ['./pressure-chart.component.css']
    })
], PressureChartComponent);
export { PressureChartComponent };
//# sourceMappingURL=pressure-chart.component.js.map