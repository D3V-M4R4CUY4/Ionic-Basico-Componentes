import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinitescrlPageRoutingModule } from './infinitescrl-routing.module';

import { InfinitescrlPage } from './infinitescrl.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinitescrlPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfinitescrlPage]
})
export class InfinitescrlPageModule {}
