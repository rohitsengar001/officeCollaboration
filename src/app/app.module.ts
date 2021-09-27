import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonlayoutModule } from './modules/commonlayout/commonlayout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonlayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
