import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SensibilidadPage } from './sensibilidad.page';
const routes = [
    {
        path: '',
        component: SensibilidadPage
    }
];
let SensibilidadPageRoutingModule = class SensibilidadPageRoutingModule {
};
SensibilidadPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SensibilidadPageRoutingModule);
export { SensibilidadPageRoutingModule };
//# sourceMappingURL=sensibilidad-routing.module.js.map