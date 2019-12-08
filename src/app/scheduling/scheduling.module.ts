import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulingPageRoutingModule } from './scheduling-routing.module';

import { SchedulingPage } from './scheduling.page';

import { GanttChart } from 'angular-gantt-chart';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulingPageRoutingModule,
    GanttChart
  ],
  declarations: [SchedulingPage
  ]
})
export class SchedulingPageModule {}
