import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProgenteraPageRoutingModule } from './progentera-routing.module';
import { ProgenteraPage } from './progentera.page';
let ProgenteraPageModule = class ProgenteraPageModule {
};
ProgenteraPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ProgenteraPageRoutingModule
        ],
        declarations: [ProgenteraPage]
    })
], ProgenteraPageModule);
export { ProgenteraPageModule };
//# sourceMappingURL=progentera.module.js.map