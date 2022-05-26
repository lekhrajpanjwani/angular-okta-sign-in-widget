import { Component, Inject, OnInit } from '@angular/core';
import { OKTA_AUTH, } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isAuthenticated?: boolean = false;
  // isAuthenticated!: boolean;

  constructor(@Inject(OKTA_AUTH) public oktaAuthService: OktaAuth,) { 
    // console.log((oktaAuthService.authStateManager?._authState)?.isAuthenticated)
    // this.isAuthenticated = this.oktaAuthService.authStateManager?._authState?.isAuthenticated;
  }


  async ngOnInit() {
    // console.log(this.oktaAuthService.isAuthenticated());
    this.isAuthenticated = await this.oktaAuthService.isAuthenticated();
    console.log(this.isAuthenticated);
  }

 async logout() {
  await this.oktaAuthService.signOut();
}

}
