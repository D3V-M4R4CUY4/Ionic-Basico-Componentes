import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfinitescrlPage } from './infinitescrl.page';

const routes: Routes = [
  {
    path: '',
    component: InfinitescrlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfinitescrlPageRoutingModule {}
