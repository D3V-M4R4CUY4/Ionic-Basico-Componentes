import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  // Aqui voy a definir el path por defecto que yo deseo que navegue cuando entre
  {
    path: '',
    redirectTo: '/tabs/account',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TabsPage,
    // Aqui es donde vamos a definir las rutas hijas para los tabs que requiramos
    children: [
      {
        path: 'account',
        loadChildren: () =>
          import('../avatar/avatar.module').then((m) => m.AvatarPageModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('../list-reorder/list-reorder.module').then(
            (m) => m.ListReorderPageModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../infinitescrl/infinitescrl.module').then(
            (m) => m.InfinitescrlPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
