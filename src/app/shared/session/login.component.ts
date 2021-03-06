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

  public user: User;

  private session: Session;

  constructor(private sessionService: SessionService) {
  }

  ngOnInit() {
    this.getSession();
    this.login();
  }

  public login(): void {
    this.sessionService.login()
      .then(usr => {
        this.user = usr;
      });
  }

  private getSession(): void {
    let email = 'ayeysides@chaikinanalytics.com',
      password = 'password';

    this.sessionService.getAuthorization(email, password)
      .then(session => {
        this.session = session;
      });
  }

}
