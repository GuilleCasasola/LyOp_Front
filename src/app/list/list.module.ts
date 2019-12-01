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


@NgModule({
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
  declarations: [ListPage,IntroComponent, SinRestComponent, ConRestComponent, MultiobjetivoComponent, ParetoComponent]
})
export class ListPageModule {}
