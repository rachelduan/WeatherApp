import { async, TestBed } from '@angular/core/testing';
import { HumiChartComponent } from './humi-chart.component';
describe('HumiChartComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HumiChartComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(HumiChartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=humi-chart.component.spec.js.map