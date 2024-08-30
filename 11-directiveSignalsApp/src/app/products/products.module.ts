import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
