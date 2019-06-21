import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderComponent} from './components/order/order.component';
import {CustomerComponent} from './components/customer/customer.component';
const routes: Routes = [
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildrenRoutingModule { }
