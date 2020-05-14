import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let CurrentComponent = class CurrentComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.timezone);
        console.log(this.currently);
        console.log(this._city);
        this.temperature = JSON.parse(JSON.stringify(this.currently)).temperature.toFixed();
    }
};
tslib_1.__decorate([
    Input()
], CurrentComponent.prototype, "timezone", void 0);
tslib_1.__decorate([
    Input()
], CurrentComponent.prototype, "currently", void 0);
tslib_1.__decorate([
    Input()
], CurrentComponent.prototype, "_city", void 0);
tslib_1.__decorate([
    Input()
], CurrentComponent.prototype, "seal", void 0);
CurrentComponent = tslib_1.__decorate([
    Component({
        selector: 'app-current',
        templateUrl: './current.component.html',
        styleUrls: ['./current.component.css']
    })
], CurrentComponent);
export { CurrentComponent };
//# sourceMappingURL=current.component.js.map