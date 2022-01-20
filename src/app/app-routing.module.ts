import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './views/carrito/carrito.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LandingComponent } from './views/landing/landing.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/landing",
    pathMatch:"full"
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"landing",
    component:LandingComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"registro",
    component:RegisterComponent
  },
  {
    path:"carrito",
    component:CarritoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
