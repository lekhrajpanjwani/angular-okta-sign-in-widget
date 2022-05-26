import { Component, Inject, OnInit } from '@angular/core';
import { OKTA_AUTH,   } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  isAuthenticated: any = false;
  username?: string = '';
  constructor(@Inject(OKTA_AUTH) public oktaAuthService: OktaAuth ) { }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuthService.isAuthenticated();
    if(this.isAuthenticated){
      const userClaims = await this.oktaAuthService.getUser();
      this.username = userClaims?.name || '';
    }
  }

}
