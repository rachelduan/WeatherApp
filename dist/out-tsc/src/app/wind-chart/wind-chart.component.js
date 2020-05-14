import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let WindChartComponent = class WindChartComponent {
    constructor() {
        this.windLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
        this.windOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.windLegend = true;
        this.windChartType = 'bar';
    }
    ngOnInit() {
        let array = new Array(24);
        for (let i = 0; i < 24; i++) {
            array[i] = this.hourly_data[i].windSpeed;
        }
        this.hourlyWind = [
            { data: array, label: 'wind speed' }
        ];
    }
};
tslib_1.__decorate([
    Input()
], WindChartComponent.prototype, "hourly_data", void 0);
WindChartComponent = tslib_1.__decorate([
    Component({
        selector: 'app-wind-chart',
        templateUrl: './wind-chart.component.html',
        styleUrls: ['./wind-chart.component.css']
    })
], WindChartComponent);
export { WindChartComponent };
//# sourceMappingURL=wind-chart.component.js.map