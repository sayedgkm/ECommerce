import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductInventoryComponent } from './product/product-inventory/product-inventory.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductFilterComponent } from './product/product-filter/product-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductInventoryComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
