import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductComponent } from './components/product/product.component';
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: ProductComponent
      },
      {
        path: 'add-product', component: AddProductComponent,
        // canDeactivate: [ConfirmLeaveGuard]
      },
      {
        path: 'product/:id', component: AddProductComponent,
        // canDeactivate: [ConfirmLeaveGuard]
      },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
