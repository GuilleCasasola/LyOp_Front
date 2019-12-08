import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ListPage } from './list.page';
import { IntroComponent } from './intro/intro.component';
import { SinRestComponent } from './sin-rest/sin-rest.component';
import { ConRestComponent } from './con-rest/con-rest.component';
import { MultiobjetivoComponent } from './multiobjetivo/multiobjetivo.component';
import { ParetoComponent } from './pareto/pareto.component';
let ListPageModule = class ListPageModule {
};
ListPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild([
                {
                    path: '',
                    component: ListPage
                }
            ])
        ],
        declarations: [ListPage, IntroComponent, SinRestComponent, ConRestComponent, MultiobjetivoComponent, ParetoComponent]
    })
], ListPageModule);
export { ListPageModule };
//# sourceMappingURL=list.module.js.map