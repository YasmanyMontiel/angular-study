import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ForEachComponent} from './for-each/for-each.component';
import {AppSharedModule} from '../../base/shared/app-shared.module';
import {routes} from './app.array.router';
import {MapComponent} from './map/map.component';
import {FindComponent} from './find/find.component';
import {ArraySliceComponent} from './slice/array-slice.component';


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
    ForEachComponent,
    MapComponent,
    FindComponent,
    ArraySliceComponent
  ],
  providers: [],
  exports: [],
})
export class ArrayModule {
}
