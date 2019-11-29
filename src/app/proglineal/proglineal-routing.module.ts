import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProglinealPage } from './proglineal.page';

const routes: Routes = [
  {
    path: '',
    component: ProglinealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProglinealPageRoutingModule {}
