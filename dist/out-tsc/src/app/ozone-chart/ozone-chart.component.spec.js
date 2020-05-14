import { async, TestBed } from '@angular/core/testing';
import { OzoneChartComponent } from './ozone-chart.component';
describe('OzoneChartComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OzoneChartComponent]
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
//# sourceMappingURL=ozone-chart.component.spec.js.map