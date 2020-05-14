import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let VisChartComponent = class VisChartComponent {
    constructor() {
        this.visLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
        this.visOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.visLegend = true;
        this.visChartType = 'bar';
    }
    ngOnInit() {
        let array = new Array(24);
        for (let i = 0; i < 24; i++) {
            array[i] = this.hourly_data[i].visibility;
        }
        this.hourlyVis = [
            { data: array, label: 'visiility' }
        ];
    }
};
tslib_1.__decorate([
    Input()
], VisChartComponent.prototype, "hourly_data", void 0);
VisChartComponent = tslib_1.__decorate([
    Component({
        selector: 'app-vis-chart',
        templateUrl: './vis-chart.component.html',
        styleUrls: ['./vis-chart.component.css']
    })
], VisChartComponent);
export { VisChartComponent };
//# sourceMappingURL=vis-chart.component.js.map