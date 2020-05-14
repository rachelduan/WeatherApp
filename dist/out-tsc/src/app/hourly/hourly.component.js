import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let HourlyComponent = class HourlyComponent {
    constructor() {
        this.content = 'temperature';
    }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    Input()
], HourlyComponent.prototype, "hourly", void 0);
HourlyComponent = tslib_1.__decorate([
    Component({
        selector: 'app-hourly',
        templateUrl: './hourly.component.html',
        styleUrls: ['./hourly.component.css']
    })
], HourlyComponent);
export { HourlyComponent };
//# sourceMappingURL=hourly.component.js.map