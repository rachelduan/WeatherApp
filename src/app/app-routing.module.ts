// import { TempChartComponent } from './temp-chart/temp-chart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //{path: 'temp-chart', component: TempChartComponent},
  //{path: '**', component: TempChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
