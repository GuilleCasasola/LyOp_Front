import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SensibilidadPage } from './sensibilidad.page';

const routes: Routes = [
  {
    path: '',
    component: SensibilidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SensibilidadPageRoutingModule {}
