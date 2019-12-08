import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SensibilidadPageRoutingModule } from './sensibilidad-routing.module';
import { SensibilidadPage } from './sensibilidad.page';
let SensibilidadPageModule = class SensibilidadPageModule {
};
SensibilidadPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SensibilidadPageRoutingModule
        ],
        declarations: [SensibilidadPage]
    })
], SensibilidadPageModule);
export { SensibilidadPageModule };
//# sourceMappingURL=sensibilidad.module.js.map