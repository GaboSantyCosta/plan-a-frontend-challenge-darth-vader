import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m=>m.HomeModule),
    title: '',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then(m=>m.LoginModule),
    title: 'You are a Lord Sith?',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
