import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProglinealPage } from './proglineal.page';
const routes = [
    {
        path: '',
        component: ProglinealPage
    }
];
let ProglinealPageRoutingModule = class ProglinealPageRoutingModule {
};
ProglinealPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ProglinealPageRoutingModule);
export { ProglinealPageRoutingModule };
//# sourceMappingURL=proglineal-routing.module.js.map