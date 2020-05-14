import * as tslib_1 from "tslib";
import { ResultsComponent } from './results/results.component';
import { SearchFormService } from './search-form.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrentComponent } from './current/current.component';
import { WeeklyComponent, NgbdModalContent } from './weekly/weekly.component';
import { HourlyComponent } from './hourly/hourly.component';
import { TempChartComponent } from './temp-chart/temp-chart.component';
import { PressureChartComponent } from './pressure-chart/pressure-chart.component';
import { HumiChartComponent } from './humi-chart/humi-chart.component';
import { OzoneChartComponent } from './ozone-chart/ozone-chart.component';
import { VisChartComponent } from './vis-chart/vis-chart.component';
import { WindChartComponent } from './wind-chart/wind-chart.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            SearchFormComponent,
            ResultsComponent,
            CurrentComponent,
            WeeklyComponent,
            HourlyComponent,
            TempChartComponent,
            PressureChartComponent,
            HumiChartComponent,
            OzoneChartComponent,
            VisChartComponent,
            WindChartComponent,
            NgbdModalContent
        ],
        entryComponents: [
            NgbdModalContent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            FormsModule,
            HttpClientModule,
            HttpClientJsonpModule,
            MatTabsModule,
            ChartsModule,
            MatDialogModule,
            NgbModule
        ],
        providers: [SearchFormService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map