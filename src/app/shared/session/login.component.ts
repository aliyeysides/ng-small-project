import {Component, OnInit} from '@angular/core';
import {SessionService} from "./session.service";

@Component({
  selector: 'psp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  session: Object;

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
      .then(session => this.session = session);
  }

  login() {
    let environment = 'desktop';
    this.sessionService.login(environment);
  }

}
