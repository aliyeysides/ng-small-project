import {Component, OnInit} from '@angular/core';
import {SessionService} from "./session.service";

@Component({
  selector: 'psp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private sessionService: SessionService) {
  }

  ngOnInit() {
    this.getSession();
  }

  getSession() {
    let email = 'ayeysides@chaikinanalytics.com',
      password = 'password';
    this.sessionService.getAuthorization(email, password);
  }

}
