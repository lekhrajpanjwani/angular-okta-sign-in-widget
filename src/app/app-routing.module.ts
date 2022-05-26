import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {OktaAuthGuard, OktaCallbackComponent,} from '@okta/okta-angular'
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'welcome', component: WelcomeComponent, canActivate: [ OktaAuthGuard ]
  },
  {
    path:'home', component: HomeComponent,
  },
  {
    path:'login/callback', component: OktaCallbackComponent
  },
  {
    path:'login', component: LoginComponent
  },
  // {
  //   path:'', redirectTo:"welcome", pathMatch:"full"
  // },
  {
    path:'', redirectTo: "home", pathMatch:"full"
  },
  // {
  //   path: '',
  //   component: HomeComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
