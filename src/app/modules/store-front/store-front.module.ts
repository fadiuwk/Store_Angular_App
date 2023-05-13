import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreFrontRoutingModule } from './store-front-routing.module';
import { StoreFrontComponent } from './store-front.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from "../shared/shared.module";
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
    declarations: [
        StoreFrontComponent,
        HomeComponent,
        ProductDetailsComponent
    ],
    imports: [
        CommonModule,
        StoreFrontRoutingModule,
        SharedModule
    ]
})
export class StoreFrontModule { }
