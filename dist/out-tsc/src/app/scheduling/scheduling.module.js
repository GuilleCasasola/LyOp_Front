import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SchedulingPageRoutingModule } from './scheduling-routing.module';
import { SchedulingPage } from './scheduling.page';
let SchedulingPageModule = class SchedulingPageModule {
};
SchedulingPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SchedulingPageRoutingModule
        ],
        declarations: [SchedulingPage]
    })
], SchedulingPageModule);
export { SchedulingPageModule };
//# sourceMappingURL=scheduling.module.js.map