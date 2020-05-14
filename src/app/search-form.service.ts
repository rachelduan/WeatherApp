import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchFormService {
  private city = new BehaviorSubject('');
  currentCity = this.city.asObservable();
  private street = new BehaviorSubject('');
  currentStreet = this.street.asObservable();
  private state = new BehaviorSubject('');
  currentState = this.state.asObservable();

  private display = new BehaviorSubject(false);
  currentDisplay = this.display.asObservable();

  private storage = new BehaviorSubject(localStorage);
  currentStorage = this.storage.asObservable();
  private keys = new BehaviorSubject([]);
  currentKeys = this.keys.asObservable();

  constructor(private http: HttpClient) { }

  changeDisplay(display: boolean) {
    this.display.next(display);
  }

  // changeKeys(keys: Array<number>) {
  //   this.keys.next(keys);
  // }
  changeKeys(keys: Array<JSON>) {
    this.keys.next(keys);
  }

  changeStorage(storage: Storage) {
    this.storage.next(storage);
  }

  changeCity(city: string) {
    this.city.next(city);
  }

  changeStreet(street: string) {
    this.street.next(street);
  }

  changeState(state: string) {
    this.state.next(state);
  }

  getGeo(street: string, city: string, state: string){
    // let url = 'http://localhost:3000/api/geoloc/' + encodeURIComponent(street) + ',' + encodeURIComponent(city) + ',' + encodeURIComponent(state);
    let url = 'http://castnode.us-east-2.elasticbeanstalk.com/api/geoloc/' + encodeURIComponent(street) + ',' + encodeURIComponent(city) + ',' + encodeURIComponent(state);
    console.log(url);
    return this.http.get(url);

  }

  getWeather(lat: number, long: number) {
    // let url = 'http://localhost:3000/api/weather/' + encodeURIComponent(lat) + '/' + encodeURIComponent(long);
    let url = 'http://castnode.us-east-2.elasticbeanstalk.com/api/weather/' + encodeURIComponent(lat) + '/' + encodeURIComponent(long);
    console.log(url);
    return this.http.get(url);
  }

  getSeal(search_key: string) {
    // let url = 'http://localhost:3000/api/seal/' + encodeURIComponent(search_key);
    let url = 'http://castnode.us-east-2.elasticbeanstalk.com/api/seal/' + encodeURIComponent(search_key);
    console.log(url);
    return this.http.get(url);
  }

  getLoc() {
    let url = 'http://ip-api.com/json';
    console.log(url);
    return this.http.get(url);
  }

  getWeekly(lat:number, lon: number, time: string) {
    // let url = 'http://localhost:3000/api/weekly/' + encodeURIComponent(lat) + '/' + encodeURIComponent(lon) + '/' + encodeURIComponent(time);
    let url = 'http://castnode.us-east-2.elasticbeanstalk.com/api/weekly/' + encodeURIComponent(lat) + '/' + encodeURIComponent(lon) + '/' + encodeURIComponent(time);
    console.log(url);
    return this.http.get(url);
  }

  getComplete(input: string) {
    // let url = 'http://localhost:3000/api/auto/' + encodeURIComponent(input);
    let url = 'http://castnode.us-east-2.elasticbeanstalk.com/api/auto/' + encodeURIComponent(input);
    console.log(url);
    return this.http.get(url);
  }
}
