import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from "./product/product.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {ProductsRoutingModule} from "./products-routing.module";
import {ProductsComponent} from "./products/products.component";



@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
