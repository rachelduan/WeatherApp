import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let HumiChartComponent = class HumiChartComponent {
    constructor() {
        this.humiLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
        this.humiOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.humiLegend = true;
        this.humiChartType = 'bar';
    }
    ngOnInit() {
        let array = new Array(24);
        for (let i = 0; i < 24; i++) {
            array[i] = this.hourly_data[i].humidity;
        }
        this.hourlyHumi = [
            { data: array, label: 'humidity' }
        ];
    }
};
tslib_1.__decorate([
    Input()
], HumiChartComponent.prototype, "hourly_data", void 0);
HumiChartComponent = tslib_1.__decorate([
    Component({
        selector: 'app-humi-chart',
        templateUrl: './humi-chart.component.html',
        styleUrls: ['./humi-chart.component.css']
    })
], HumiChartComponent);
export { HumiChartComponent };
//# sourceMappingURL=humi-chart.component.js.map