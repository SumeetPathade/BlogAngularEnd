import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  {
    path:'register',
    component: RegisterComponent
  }
  , {
    path:'login',
    component: LoginComponent
  }
  , {
    path:'resume',
    component: ResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
