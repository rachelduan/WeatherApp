import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let OzoneChartComponent = class OzoneChartComponent {
    constructor() {
        this.ozoneLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
        this.ozoneOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.ozoneLegend = true;
        this.ozoneChartType = 'bar';
    }
    ngOnInit() {
        let array = new Array(24);
        for (let i = 0; i < 24; i++) {
            array[i] = this.hourly_data[i].ozone;
        }
        this.hourlyOzone = [
            { data: array, label: 'ozone' }
        ];
    }
};
tslib_1.__decorate([
    Input()
], OzoneChartComponent.prototype, "hourly_data", void 0);
OzoneChartComponent = tslib_1.__decorate([
    Component({
        selector: 'app-ozone-chart',
        templateUrl: './ozone-chart.component.html',
        styleUrls: ['./ozone-chart.component.css']
    })
], OzoneChartComponent);
export { OzoneChartComponent };
//# sourceMappingURL=ozone-chart.component.js.map