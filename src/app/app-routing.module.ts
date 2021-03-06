import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';




const appRoutes: Routes = [
{ path: 'login', component: LoginComponent },
{path:'registration',component:RegistrationComponent},
{path:'**',redirectTo: 'login', pathMatch:'full'}

];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
