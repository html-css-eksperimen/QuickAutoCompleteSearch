import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuickSearchModule } from './quick-search/quick-search.module';
import { TentangAppComponent } from './abouts/tentang-app/tentang-app.component';

@NgModule({
  declarations: [
    AppComponent,
    TentangAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuickSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
