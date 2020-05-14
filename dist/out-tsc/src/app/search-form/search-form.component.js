import * as tslib_1 from "tslib";
// import { states } from '../states';
import { Component } from '@angular/core';
let SearchFormComponent = class SearchFormComponent {
    constructor(geoService) {
        this.geoService = geoService;
        // states = states;
        this.street = '';
        this.city = '';
        this.state = '';
        this.results = true;
        this.itemChecked = false;
        this.strt_value = "";
        this.strt_disabled = false;
        this.ct_value = "";
        this.ct_disabled = false;
        this.stat_selectedIndex = 0;
        this.stat_disabled = false;
        this.result_btn_style = {
            'background-color': 'rgb(68, 127, 159)',
            'color': 'white'
        };
        this.fav_btn_style = {
            'background-color': 'white',
            'color': 'rgb(142, 142, 142)'
        };
        this.progress_style = {
            'visibility': 'hidden'
        };
        this.formSubmitted = false;
    }
    ngOnInit() {
        this.geoService.currentCity.subscribe(message => this.curCity = message);
        this.geoService.currentStreet.subscribe(message => this.curStreet = message);
        this.geoService.currentState.subscribe(message => this.curState = message);
        this.geoService.currentDisplay.subscribe(message => this.showProgress = message);
    }
    showContent(value) {
        this.results = value;
        if (value) {
            this.result_btn_style["color"] = 'white';
            this.result_btn_style["background-color"] = 'rgb(68, 127, 159)';
            this.fav_btn_style["color"] = 'rgb(142, 142, 142)';
            this.fav_btn_style["background-color"] = 'white';
        }
        else {
            this.result_btn_style["color"] = 'rgb(142, 142, 142)';
            this.result_btn_style["background-color"] = 'white';
            this.fav_btn_style["color"] = 'white';
            this.fav_btn_style["background-color"] = 'rgb(68, 127, 159)';
        }
    }
    resetField() {
        this.itemChecked = !this.itemChecked;
        this.formSubmitted = false;
        this.street = "";
        this.strt_disabled = !this.strt_disabled;
        this.city = "";
        this.ct_disabled = !this.ct_disabled;
        this.state = "";
        this.stat_disabled = !this.stat_disabled;
    }
    unSubmit() {
        this.formSubmitted = false;
        this.results = true;
        this.itemChecked = false;
        this.stat_disabled = false;
        this.strt_disabled = false;
        this.ct_disabled = false;
    }
    updateGeoInput() {
        this.geoService.changeCity(this.city);
        this.geoService.changeStreet(this.street);
        this.geoService.changeState(this.state);
    }
    onSubmit() {
        this.showProgress = true;
        if (this.itemChecked) {
            this.geoService.getLoc().subscribe(resp => {
                this.geoLat = resp["lat"];
                this.geoLon = resp["lon"];
                this.city = resp["city"];
                this.state = resp["region"];
                let state = resp["region"];
                this.geoService.getWeather(this.geoLat, this.geoLon).subscribe(resp => {
                    console.log(resp);
                    this.weatherResults = JSON.parse(JSON.stringify(resp));
                });
                this.formSubmitted = true;
                this.geoService.getSeal(state).subscribe(message => {
                    this.state_seal_url = JSON.parse(JSON.stringify(message)).items[0].link;
                });
                this.showProgress = false;
            });
        }
        else {
            this.geoService.getGeo(this.street, this.city, this.state).subscribe(resp => {
                let geo = JSON.parse(JSON.stringify(resp)).results[0].geometry.location;
                this.geoLat = geo.lat;
                this.geoLon = geo.lng;
                this.geoService.getWeather(this.geoLat, this.geoLon).subscribe(resp => {
                    console.log(resp);
                    this.weatherResults = JSON.parse(JSON.stringify(resp));
                });
                this.formSubmitted = true;
                this.geoService.getSeal(this.state).subscribe(message => {
                    this.state_seal_url = JSON.parse(JSON.stringify(message)).items[0].link;
                });
                this.showProgress = false;
            });
        }
    }
};
SearchFormComponent = tslib_1.__decorate([
    Component({
        selector: 'app-search-form',
        templateUrl: './search-form.component.html',
        styleUrls: ['./search-form.component.css']
    })
], SearchFormComponent);
export { SearchFormComponent };
//# sourceMappingURL=search-form.component.js.map