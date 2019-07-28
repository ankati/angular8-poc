import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChildrenModule} from './children/children.module';
import { HomeComponent } from './home/home.component';
import {Form1Component} from './form1/form1.component';
import {Form2Component} from './form2/form2.component';
import {AuthGuardGuard} from './auth-guard.guard'
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'form1',
    component: Form1Component
  },
  {
    path: 'form2',
    component: Form2Component,
    canActivate:[AuthGuardGuard]
  },
  {
    path: 'children',
    loadChildren: () => import('./children/children.module').then(mod => mod.ChildrenModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
