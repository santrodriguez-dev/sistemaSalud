import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth/auth.guard';

const routes: Routes = [
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule', canActivate: [AuthGuard] },
  { path: '', loadChildren: './modules/modulos.module#ModulosModule', canActivate: [AuthGuard] },
  // { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
