import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChildrenModule} from './children/children.module';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
