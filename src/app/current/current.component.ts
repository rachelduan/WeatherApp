import { Component, OnInit, Input } from '@angular/core';
import { SearchFormService } from '../search-form.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  @Input() timezone: string;
  @Input() currently;
  @Input() _city: string;
  @Input() seal: string;
  temperature: number;
  state_seal: string;

  constructor() { }

  ngOnInit() {
    this.temperature = JSON.parse(JSON.stringify(this.currently)).temperature.toFixed();
  }

}
