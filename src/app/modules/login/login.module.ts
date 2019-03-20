import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './servicios/login.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [LoginComponent],
  exports: [RouterModule],
  providers: [LoginService]
})
export class LoginModule { }
