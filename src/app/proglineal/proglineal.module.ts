import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProglinealPageRoutingModule } from './proglineal-routing.module';

import { ProglinealPage } from './proglineal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProglinealPageRoutingModule
  ],
  declarations: [ProglinealPage]
})

export class ProglinealPageModule   {}
