import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import myAppconfig from '../../config/my-app-config';

import OktaSignIn from '@okta/okta-signin-widget';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  oktaSignIn: any;
  constructor(@Inject(OKTA_AUTH) private oktaAuthService: OktaAuth) { 
    this.oktaSignIn = new OktaSignIn({
      logo: 'assets/images/angular_solidBlack.png',
      features:{
        registration:true,
        multiOptionalFactorEnroll: true,
      },
      baseUrl:myAppconfig.oidc.issuer.split('/oauth2')[0],
      clientId: myAppconfig.oidc.clientId,
      redirectUri: myAppconfig.oidc.redirectUri,
      authParams:{
        pkce: true,
        issuer: myAppconfig.oidc.issuer,
        scopes: myAppconfig.oidc.scopes
      }

    });
  }

  ngOnInit(): void {
    this.oktaSignIn.renderEl(
      {
      el:'#okta-sign-in-widget'
    },(response: any) => {
      if(response.status === 'SUCCESS'){
        this.oktaAuthService.signInWithRedirect();
      }
    },(error:any) =>{
      throw error;
    })
  }

  ngOnDestroy(): void {
    this.oktaSignIn.remove();
  }

}
