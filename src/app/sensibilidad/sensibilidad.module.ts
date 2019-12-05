import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SensibilidadPageRoutingModule } from './sensibilidad-routing.module';

import { SensibilidadPage } from './sensibilidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SensibilidadPageRoutingModule
  ],
  declarations: [SensibilidadPage]
})
export class SensibilidadPageModule {}
