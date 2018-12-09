import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ViewPage } from '../pages/view/view.page';
import { OvernightPage } from '../pages/overnight/overnight.page';
import { SleepinessPage } from '../pages/sleepiness/sleepiness.page';



const routes = [
  {
  path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'view',
	outlet: 'view',
	component: ViewPage
      },
      {
        path: 'overnight',
	outlet: 'overnight',
	component: OvernightPage
      },
      {
        path: 'sleepiness',
	outlet: 'sleepiness',
	component: SleepinessPage
      }
    ],
  },
  {path: '',
    redirectTo: '/tabs/(view:view)',
    pathMatch: 'full'
  }
  
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
    ],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
