import { ResultsComponent } from './results/results.component';
import { SearchFormService } from './search-form.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { ChartsModule} from 'ng2-charts-x';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule, MatInputModule } from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrentComponent } from './current/current.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { HourlyComponent } from './hourly/hourly.component';
import { TempChartComponent } from './temp-chart/temp-chart.component';
import { PressureChartComponent } from './pressure-chart/pressure-chart.component';
import { HumiChartComponent } from './humi-chart/humi-chart.component';
import { OzoneChartComponent } from './ozone-chart/ozone-chart.component';
import { VisChartComponent } from './vis-chart/vis-chart.component';
import { WindChartComponent } from './wind-chart/wind-chart.component';
import { WeeklyDialogComponent } from './weekly-dialog/weekly-dialog.component';

@NgModule({
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
    WeeklyDialogComponent
  ],
  entryComponents: [
    WeeklyDialogComponent
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
    NgbModule,
    MatAutocompleteModule,
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [SearchFormService],
  exports: [
    WeeklyDialogComponent,
    WeeklyComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
