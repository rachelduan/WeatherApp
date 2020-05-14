import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisChartComponent } from './vis-chart.component';

describe('VisChartComponent', () => {
  let component: VisChartComponent;
  let fixture: ComponentFixture<VisChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
