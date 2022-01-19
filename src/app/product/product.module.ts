import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductCreateComponent} from "./product-create/product-create.component";


@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    // ProductEditComponent,
    // ProductDeleteComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
