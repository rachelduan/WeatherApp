import { SearchFormService } from './../search-form.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnChanges {

  @Input() city: string;
  @Input() street: string;
  @Input() state: string;
  @Input() weather: JSON;
  @Input() showResults: boolean;
  @Input() state_seal: string;
  @Input() lat: number;
  @Input() long: number;
  @Input() twitter_url;
  
  private _submitted: boolean;
  star = 'star_border';
  hasResults = false;
  local_storage;

  objectKeys = [];
  


  currentClass = "tab-pane active";
  hourlyClass = "tab-pane";
  weeklyClass = "tab-pane";

  currentNavClass = "nav-link active";
  hourlyNavClass = "nav-link";
  weeklyNavClass = "nav-link";

  constructor(private geoService: SearchFormService) { }

  ngOnInit() {
    this.geoService.currentStorage.subscribe(message => this.local_storage = message);
    this.geoService.currentKeys.subscribe(message => this.objectKeys = message);
    // console.log(JSON.parse(JSON.stringify(this.weather)).currently.temperature);
    // this.temperature = JSON.parse(JSON.stringify(this.weather)).currently.temperature;
    // this.summary = JSON.parse(JSON.stringify(this.weather)).currently.summary;
    // this.twitter_url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('The current temperature at ') + encodeURIComponent(this.city) + encodeURIComponent(' is ') + encodeURIComponent(this.temperature) + encodeURIComponent('°F. The weather conditions are ') + encodeURIComponent(this.summary) + encodeURIComponent('.Website: URL #CSCI571WeatherSearch');
  }

  activate(pane: string) {
    if (pane == 'current') {
      this.currentClass = "tab-pane active";
      this.hourlyClass = "tab-pane";
      this.weeklyClass = "tab-pane";

      this.currentNavClass = "nav-link active";
      this.hourlyNavClass = "nav-link";
      this.weeklyNavClass = "nav-link";
    } else if (pane == 'hourly') {
      this.currentClass = "tab-pane";
      this.hourlyClass = "tab-pane active";
      this.weeklyClass = "tab-pane";

      this.currentNavClass = "nav-link";
      this.hourlyNavClass = "nav-link active";
      this.weeklyNavClass = "nav-link";
    } else {
      this.currentClass = "tab-pane";
      this.hourlyClass = "tab-pane";
      this.weeklyClass = "tab-pane active";

      this.currentNavClass = "nav-link";
      this.hourlyNavClass = "nav-link";
      this.weeklyNavClass = "nav-link active";
    }
    
  }

  @Input()
  get submitted() {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

  ngOnChanges() {}

  favevent() {
    if (this.star === 'star_border') {
      this.star = 'star';
      document.getElementById('fav').style.color = '#FB8C00';
      localStorage.setItem(this.city, JSON.stringify({"cityName": this.city,
                                                      "state": this.state,
                                                      "seal": this.state_seal,
                                                      "weather":this.weather
                                                      }));  

      this.hasResults = true;
      this.updateKeys();
      
    } else {
      this.star = 'star_border';
      document.getElementById('fav').style.color = 'black';

      localStorage.removeItem(this.city);
      this.updateKeys();
      if (localStorage.length == 0) {
        this.hasResults = false;
      }
    }
  }

  updateKeys() {
    this.objectKeys = [];
    for (let i = 0; i < localStorage.length; i++) {
      this.objectKeys.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
  }

  deleteItem(cityName: string) {
    localStorage.removeItem(cityName);
    this.updateKeys();
    if (localStorage.length == 0) {
      this.hasResults = false;
    }
  }
}
