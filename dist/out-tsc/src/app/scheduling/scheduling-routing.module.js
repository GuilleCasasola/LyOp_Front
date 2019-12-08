import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SchedulingPage } from './scheduling.page';
const routes = [
    {
        path: '',
        component: SchedulingPage
    }
];
let SchedulingPageRoutingModule = class SchedulingPageRoutingModule {
};
SchedulingPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SchedulingPageRoutingModule);
export { SchedulingPageRoutingModule };
//# sourceMappingURL=scheduling-routing.module.js.map