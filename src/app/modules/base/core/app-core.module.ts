import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppNavbarComponent} from './components/navbar/app.navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    // ----------------
    RouterModule
  ],
  providers: [],
  declarations: [
    AppNavbarComponent
  ],
  exports: [
    AppNavbarComponent
  ]
})
export class AppCoreModule {
}

