import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnonymousGuard } from './modules/shared/guards/anonymous.guard';
import { AdminGuard } from './modules/shared/guards/admin.guard';
import { UserGuard } from './modules/shared/guards/user.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: "full"
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    canActivate: [AnonymousGuard],
    canActivateChild: [AnonymousGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    // canActivate: [AdminGuard],
    // canActivateChild: [AdminGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/store-front/store-front.module').then(m => m.StoreFrontModule),
    // canActivate: [UserGuard],
    // canActivateChild: [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
