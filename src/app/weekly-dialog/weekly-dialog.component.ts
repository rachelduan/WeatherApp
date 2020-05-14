import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-weekly-dialog',
  templateUrl: './weekly-dialog.component.html',
  styleUrls: ['./weekly-dialog.component.css']
})
export class WeeklyDialogComponent implements OnInit {
  // @Input() city;
  // @Input() temperature;
  // @Input() icon;
  // @Input() precipIntensity;
  // @Input() precipProbability;
  // @Input() windSpeed;
  // @Input() humidity;
  // @Input() visibility;
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
