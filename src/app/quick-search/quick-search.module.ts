import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { QuickSearchRoutingModule } from './quick-search-routing.module';
import { SearchPagesComponent } from './search-pages/search-pages.component';
import { SearchHomeComponent } from './search-home/search-home.component';
import { TentangAppComponent } from './tentang-app/tentang-app.component';
@NgModule({
  declarations: [
    SearchPagesComponent,
    SearchHomeComponent,
    TentangAppComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    QuickSearchRoutingModule
  ]
})
export class QuickSearchModule { }
