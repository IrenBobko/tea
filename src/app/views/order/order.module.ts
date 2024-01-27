import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderComponent} from "./order.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OrderRoutingModule} from "./order-routing.module";



@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    OrderRoutingModule
  ],
  exports: [
    OrderRoutingModule
  ]
})
export class OrderModule { }
