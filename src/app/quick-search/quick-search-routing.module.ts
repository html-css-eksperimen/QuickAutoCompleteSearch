import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPagesComponent } from './search-pages/search-pages.component';
import { SearchHomeComponent } from './search-home/search-home.component';

const routes: Routes = [
  {
    path: '',
    component: SearchPagesComponent,
    children: [
      {
        path: 'bandara',
        component: SearchPagesComponent,
      },
      {
        path: '',
        redirectTo: '/bandara',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuickSearchRoutingModule { }
