import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreFrontComponent } from './store-front.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: '', component: StoreFrontComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'product/:id', component: ProductDetailsComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreFrontRoutingModule { }
