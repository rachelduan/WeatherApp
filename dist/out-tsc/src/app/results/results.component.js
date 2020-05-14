import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let ResultsComponent = class ResultsComponent {
    constructor(geoService) {
        this.geoService = geoService;
        this.star = 'star_border';
        this.hasResults = false;
        this.objectKeys = [];
        this.currentClass = "tab-pane active";
        this.hourlyClass = "tab-pane";
        this.weeklyClass = "tab-pane";
        this.currentNavClass = "nav-link active";
        this.hourlyNavClass = "nav-link";
        this.weeklyNavClass = "nav-link";
    }
    ngOnInit() {
        this.geoService.currentStorage.subscribe(message => this.local_storage = message);
        this.geoService.currentKeys.subscribe(message => this.objectKeys = message);
    }
    activate(pane) {
        if (pane == 'current') {
            this.currentClass = "tab-pane active";
            this.hourlyClass = "tab-pane";
            this.weeklyClass = "tab-pane";
            this.currentNavClass = "nav-link active";
            this.hourlyNavClass = "nav-link";
            this.weeklyNavClass = "nav-link";
        }
        else if (pane == 'hourly') {
            this.currentClass = "tab-pane";
            this.hourlyClass = "tab-pane active";
            this.weeklyClass = "tab-pane";
            this.currentNavClass = "nav-link";
            this.hourlyNavClass = "nav-link active";
            this.weeklyNavClass = "nav-link";
        }
        else {
            this.currentClass = "tab-pane";
            this.hourlyClass = "tab-pane";
            this.weeklyClass = "tab-pane active";
            this.currentNavClass = "nav-link";
            this.hourlyNavClass = "nav-link";
            this.weeklyNavClass = "nav-link active";
        }
    }
    get submitted() {
        return this._submitted;
    }
    set submitted(value) {
        this._submitted = value;
    }
    ngOnChanges() { }
    favevent() {
        if (this.star === 'star_border') {
            this.star = 'star';
            document.getElementById('fav').style.color = '#FB8C00';
            localStorage.setItem(this.city, JSON.stringify({ "cityName": this.city,
                "state": this.state,
                "seal": this.state_seal,
                "weather": this.weather
            }));
            this.hasResults = true;
            this.updateKeys();
        }
        else {
            this.star = 'star_border';
            document.getElementById('fav').style.color = 'black';
            localStorage.removeItem(this.city);
            this.local_storage = localStorage;
            this.updateKeys();
            if (localStorage.length == 0) {
                this.hasResults = false;
            }
        }
    }
    updateKeys() {
        for (let i = 0; i < localStorage.length; i++) {
            this.objectKeys = [];
            this.objectKeys.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
    }
    deleteItem(cityName) {
        localStorage.removeItem(cityName);
        this.local_storage = localStorage;
        this.updateKeys();
    }
};
tslib_1.__decorate([
    Input()
], ResultsComponent.prototype, "city", void 0);
tslib_1.__decorate([
    Input()
], ResultsComponent.prototype, "street", void 0);
tslib_1.__decorate([
    Input()
], ResultsComponent.prototype, "state", void 0);
tslib_1.__decorate([
    Input()
], ResultsComponent.prototype, "weather", void 0);
tslib_1.__decorate([
    Input()
], ResultsComponent.prototype, "showResults", void 0);
tslib_1.__decorate([
    Input()
], ResultsComponent.prototype, "state_seal", void 0);
tslib_1.__decorate([
    Input()
], ResultsComponent.prototype, "lat", void 0);
tslib_1.__decorate([
    Input()
], ResultsComponent.prototype, "long", void 0);
tslib_1.__decorate([
    Input()
], ResultsComponent.prototype, "submitted", null);
ResultsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-results',
        templateUrl: './results.component.html',
        styleUrls: ['./results.component.css']
    })
], ResultsComponent);
export { ResultsComponent };
//# sourceMappingURL=results.component.js.map