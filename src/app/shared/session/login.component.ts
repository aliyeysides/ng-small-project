import {Component, OnInit} from '@angular/core';

import {SessionService} from "./session.service";
import {Session} from './session';
import {User} from "./user";

@Component({
  selector: 'psp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  session: Session;
  user: User;

  constructor(private sessionService: SessionService) {
    this.getSession();
    this.login();
  }

  ngOnInit() {
  }

  getSession(): void {
    let email = 'shashankpunuru@flexisphere.com',
      password = 'facebook321';

    this.sessionService.getAuthorization(email, password)
      .then(session => {
        this.session = session;
      });
  }

  login(): void {
    this.sessionService.login()
      .then(usr => {
        this.user = usr;
      });
  }

}
