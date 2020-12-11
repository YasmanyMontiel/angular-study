import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppSharedModule} from './modules/base/shared/app-shared.module';
import {AppCoreModule} from './modules/base/core/app-core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppCoreModule,
    AppSharedModule
  ],
  exports: [
    AppCoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
