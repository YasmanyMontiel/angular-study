import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {routes} from './app.samples.router';
import {AppSharedModule} from '../base/shared/app-shared.module';


@NgModule({
  declarations: [
    // ----------------
  ],
  imports: [
    CommonModule,
    // ----------------
    RouterModule.forChild(routes),
    // ----------------
    AppSharedModule,
    // ----------------
  ],
  exports: [
    // ---------------------
  ],
  providers: [],
})
export class AppSamplesModule {
}
