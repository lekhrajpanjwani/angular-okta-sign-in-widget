import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';

import {
  OKTA_CONFIG,
  OktaAuthModule
} from '@okta/okta-angular';
import { Router } from '@angular/router';
import myAppConfig from './config/my-app-config';

import { OktaAuth } from '@okta/okta-auth-js';
import { HomeComponent } from './components/home/home.component';

const config = Object.assign({
  onAuthRequired:(oktaAuth:any, injector:Injector) =>{
    const router = injector.get(Router);
    router.navigate(['/login'])
  }
}, myAppConfig.oidc)
const oktaAuth = new OktaAuth(config);

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule
  ],
  providers: [{ 
    provide: OKTA_CONFIG, 
    useValue: { oktaAuth } 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
