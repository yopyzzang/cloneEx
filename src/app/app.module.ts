import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// @ts-ignore
import { ProductComponent } from './product/product.component';
import {RouterModule} from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent }, // 규격 정확해야 오류 안남
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
