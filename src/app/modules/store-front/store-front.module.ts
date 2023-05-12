import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreFrontRoutingModule } from './store-front-routing.module';
import { StoreFrontComponent } from './store-front.component';


@NgModule({
  declarations: [
    StoreFrontComponent
  ],
  imports: [
    CommonModule,
    StoreFrontRoutingModule
  ]
})
export class StoreFrontModule { }
