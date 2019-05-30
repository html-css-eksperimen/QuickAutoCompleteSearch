import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPagesComponent } from './search-pages/search-pages.component';
import { SearchHomeComponent } from './search-home/search-home.component';
import { TentangAppComponent } from './tentang-app/tentang-app.component';

const routes: Routes = [
  {
    path: '',
    component: SearchHomeComponent,
    children: [
      {
        path: 'cari-bandara',
        component: SearchPagesComponent,
      },
      {
        path: '',
        redirectTo: '/cari-bandara',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'tentang',
    component: TentangAppComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuickSearchRoutingModule { }
