import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { HomeRoutingModule } from './home-routing.module';
import { ViewPageModule } from '../pages/view/view.module';
import { OvernightPageModule } from '../pages/overnight/overnight.module';
import { SleepinessPageModule } from '../pages/sleepiness/sleepiness.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule,
    ViewPageModule,
    OvernightPageModule,
    SleepinessPageModule
    ],
  declarations: [HomePage]
})
export class HomePageModule {}
