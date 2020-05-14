import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let SearchFormService = class SearchFormService {
    constructor(http) {
        this.http = http;
        this.city = new BehaviorSubject('');
        this.currentCity = this.city.asObservable();
        this.street = new BehaviorSubject('');
        this.currentStreet = this.street.asObservable();
        this.state = new BehaviorSubject('');
        this.currentState = this.state.asObservable();
        this.display = new BehaviorSubject(false);
        this.currentDisplay = this.display.asObservable();
        this.storage = new BehaviorSubject(localStorage);
        this.currentStorage = this.storage.asObservable();
        this.keys = new BehaviorSubject([]);
        this.currentKeys = this.keys.asObservable();
    }
    changeDisplay(display) {
        this.display.next(display);
    }
    // changeKeys(keys: Array<number>) {
    //   this.keys.next(keys);
    // }
    changeKeys(keys) {
        this.keys.next(keys);
    }
    changeStorage(storage) {
        this.storage.next(storage);
    }
    changeCity(city) {
        this.city.next(city);
    }
    changeStreet(street) {
        this.street.next(street);
    }
    changeState(state) {
        this.state.next(state);
    }
    getGeo(street, city, state) {
        let url = 'http://localhost:3000/api/geoloc/' + encodeURIComponent(street) + ',' + encodeURIComponent(city) + ',' + encodeURIComponent(state);
        console.log(url);
        return this.http.get(url);
    }
    getWeather(lat, long) {
        let url = 'http://localhost:3000/api/weather/' + encodeURIComponent(lat) + '/' + encodeURIComponent(long);
        console.log(url);
        return this.http.get(url);
    }
    getSeal(search_key) {
        let url = 'http://localhost:3000/api/seal/' + encodeURIComponent(search_key);
        console.log(url);
        return this.http.get(url);
    }
    getLoc() {
        let url = 'http://ip-api.com/json';
        console.log(url);
        return this.http.get(url);
    }
    getWeekly(lat, lon, time) {
        let url = 'http://localhost:3000/api/weekly/' + encodeURIComponent(lat) + '/' + encodeURIComponent(lon) + '/' + encodeURIComponent(time);
        console.log(url);
        return this.http.get(url);
    }
};
SearchFormService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], SearchFormService);
export { SearchFormService };
//# sourceMappingURL=search-form.service.js.map