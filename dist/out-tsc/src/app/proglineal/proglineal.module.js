import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProglinealPageRoutingModule } from './proglineal-routing.module';
import { ProglinealPage } from './proglineal.page';
let ProglinealPageModule = class ProglinealPageModule {
};
ProglinealPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ProglinealPageRoutingModule
        ],
        declarations: [ProglinealPage]
    })
], ProglinealPageModule);
export { ProglinealPageModule };
//# sourceMappingURL=proglineal.module.js.map