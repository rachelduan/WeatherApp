import * as tslib_1 from "tslib";
// import { TempChartComponent } from './temp-chart/temp-chart.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [
//{path: 'temp-chart', component: TempChartComponent},
//{path: '**', component: TempChartComponent}
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map