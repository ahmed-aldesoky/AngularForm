import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';

const routes: Routes = [
  {path:'', component:SignupComponent},
  {path:'Login', component:LoginComponent},
  {path:'forgetpass', component:ForgetpassComponent},
  {path:'signup2', component:Signup2Component},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
