import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AppSharedModule} from '../../base/shared/app-shared.module';
import {routes} from './app.javascript.router';
import {JavascriptTipsComponent} from './tips/javascript-tips.component';



@NgModule({
  imports: [
    CommonModule,
    // ----------------
    RouterModule.forChild(routes),
    // ----------------
    AppSharedModule
    // ----------------
  ],
  declarations: [
    JavascriptTipsComponent
  ],
  providers: [],
  exports: [],
})
export class JavascriptModule {
}
