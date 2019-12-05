import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgenteraPageRoutingModule } from './progentera-routing.module';

import { ProgenteraPage } from './progentera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgenteraPageRoutingModule
  ],
  declarations: [ProgenteraPage]
})
export class ProgenteraPageModule {}
