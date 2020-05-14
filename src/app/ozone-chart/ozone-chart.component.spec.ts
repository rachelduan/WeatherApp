import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OzoneChartComponent } from './ozone-chart.component';

describe('OzoneChartComponent', () => {
  let component: OzoneChartComponent;
  let fixture: ComponentFixture<OzoneChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OzoneChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OzoneChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
