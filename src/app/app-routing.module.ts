import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TentangAppComponent } from './abouts/tentang-app/tentang-app.component';

const routes: Routes = [
  {
    path: 'cari',
    loadChildren: './quick-search/quick-search.module#QuickSearchModule'
  },
  {
    path: 'about',
    component: TentangAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
