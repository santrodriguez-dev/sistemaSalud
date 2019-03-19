import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './modulos/login/login.module';
import { ModulosModule } from './modulos/modulos.module';
import { AuthGuard } from './shared/auth/auth.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => LoginModule, canActivate: [AuthGuard] },
  { path: 'intro', loadChildren: () => ModulosModule, canActivate: [AuthGuard] },
  // { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: '**', redirectTo: 'intro', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
