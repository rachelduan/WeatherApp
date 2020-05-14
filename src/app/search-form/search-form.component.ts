import { SearchFormService } from './../search-form.service';
// import { states } from '../states';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  // states = states;
  street = '';
  city = '';
  state = '';
  curCity: string;
  curStreet: string;
  curState: string;
  weatherResults: JSON;
  state_seal_url: string;
  showProgress: boolean;
  results = true;
  itemChecked = false;
  geoLat: number;
  geoLon: number;
  myControl = new FormControl();
  options: string[];
  twitter: string;
  validInput = true;
  

  strt_value: string = "";
  strt_disabled: boolean = false;

  ct_value: string = "";
  ct_disabled: boolean = false;

  stat_selectedIndex: number = 0;
  stat_disabled: boolean = false;

  result_btn_style = {
    'background-color': 'rgb(68, 127, 159)',
    'color': 'white'
  }
  fav_btn_style = {
    'background-color': 'white',
    'color': 'rgb(142, 142, 142)'
  }
  progress_style = {
    'visibility': 'hidden'
  }

  formSubmitted = false;

  constructor(private geoService : SearchFormService) { }

  ngOnInit() {
    this.geoService.currentCity.subscribe(message => this.curCity = message);
    this.geoService.currentStreet.subscribe(message => this.curStreet = message);
    this.geoService.currentState.subscribe(message => this.curState = message);

    this.geoService.currentDisplay.subscribe(message => this.showProgress = message);
    
  }

  showContent(value: boolean) {
    this.results = value;
    if (value) {
      this.result_btn_style["color"] = 'white';
      this.result_btn_style["background-color"] = 'rgb(68, 127, 159)';
      this.fav_btn_style["color"] = 'rgb(142, 142, 142)';
      this.fav_btn_style["background-color"] = 'white';
    } else {
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

    this.validInput = true;
    this.showProgress = false;

  }

  updateGeoInput() {
    this.geoService.changeCity(this.city);
    this.geoService.changeStreet(this.street);
    this.geoService.changeState(this.state);
  }

  onSubmit() {
    this.showProgress = true;
    if (this.itemChecked) {
      this.validInput = true;
      this.geoService.getLoc().subscribe(resp => {
        this.geoLat = resp["lat"];
        this.geoLon = resp["lon"];
        this.city = resp["city"];
        this.state = resp["region"];
        let state = resp["region"];

        this.geoService.getWeather(this.geoLat, this.geoLon).subscribe(resp => {
          console.log(resp);
          this.weatherResults = JSON.parse(JSON.stringify(resp));
          this.twitter = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('The current temperature at ') + encodeURIComponent(this.city) + encodeURIComponent(' is ') + encodeURIComponent(this.weatherResults['currently'].temperature) + encodeURIComponent('°F. The weather conditions are ') + encodeURIComponent(this.weatherResults['currently'].summary) + encodeURIComponent('.#CSCI571WeatherSearch');
        })

        this.formSubmitted = true;
        this.geoService.getSeal(state).subscribe(message => {
          this.state_seal_url = JSON.parse(JSON.stringify(message)).items[0].link;
        })
        this.showProgress = false;
      })
    } else {
      this.geoService.getGeo(this.street, this.city, this.state).subscribe(resp => {
        if (resp['status']== 'ZERO_RESULTS') {
          this.validInput = false;
          this.showProgress = false;
          return;
        }
        this.validInput = true;
        let geo = JSON.parse(JSON.stringify(resp)).results[0].geometry.location;
        this.geoLat = geo.lat;
        this.geoLon = geo.lng;

        this.geoService.getWeather(this.geoLat, this.geoLon).subscribe(resp => {
          console.log(resp);
          this.weatherResults = JSON.parse(JSON.stringify(resp));
        })
        this.formSubmitted = true;
        this.geoService.getSeal(this.state).subscribe(message => {
          this.state_seal_url = JSON.parse(JSON.stringify(message)).items[0].link;
        })
        this.showProgress = false;
      });
    }
  
  }

  changeOptions() {
    console.log(this.city);
    this.geoService.getComplete(this.city).subscribe(resp => {
      let predict = resp['predictions'];
      let len = predict.length;
      if (len > 5) {
        len = 5;
      }
      this.options = [];
      for (let i = 0; i < len; i++) {
        this.options.push(predict[i].structured_formatting.main_text);
      }
    })
  }



}
