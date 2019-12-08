import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProgenteraPage } from './progentera.page';
const routes = [
    {
        path: '',
        component: ProgenteraPage
    }
];
let ProgenteraPageRoutingModule = class ProgenteraPageRoutingModule {
};
ProgenteraPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ProgenteraPageRoutingModule);
export { ProgenteraPageRoutingModule };
//# sourceMappingURL=progentera-routing.module.js.map