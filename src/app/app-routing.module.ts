import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { LayoutComponent } from './components/layout/layout.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  } ,
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'products',
    component:LayoutComponent,

  },
  {
    path:'car/:items',
    component:CarComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
