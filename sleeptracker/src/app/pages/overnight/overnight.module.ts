import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OvernightPage } from './overnight.page';

import { OvernightComponent } from '../../components/overnight/overnight.component';

const routes: Routes = [
  {
    path: '',
    component: OvernightPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OvernightPage, OvernightComponent]
})
export class OvernightPageModule {}
