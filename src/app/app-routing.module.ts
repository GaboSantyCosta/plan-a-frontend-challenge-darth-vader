import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m=>m.HomeModule),
    title: 'Home',
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then(m=>m.LoginModule),
    title: 'Login',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
