import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    // ----------------
    HttpClientModule,
    // ----------------
    FormsModule,
    ReactiveFormsModule,
    // ----------------
  ],
  providers: [
    // Services -------------------------
  ],
  declarations: [
    // Pipes -------------------------
    // Components --------------------
  ],
  exports: [
    // Modules -------------------
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Pipes ------------------------
    // Components ---------------------
  ]
})
export class AppSharedModule {
}
