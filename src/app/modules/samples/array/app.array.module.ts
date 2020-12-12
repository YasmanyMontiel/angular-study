import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ForEachComponent} from './for-each/for-each.component';
import {AppSharedModule} from '../../base/shared/app-shared.module';
import {routes} from './app.array.router';





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
    ForEachComponent
  ],
  providers: [
  ],
  exports: [],
})
export class ArrayModule {
}
