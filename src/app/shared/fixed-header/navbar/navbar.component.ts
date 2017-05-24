import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SharedService} from "../../shared.service";

@Component({
  selector: 'psp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.router.events.subscribe(
      val => this.sharedService.shiftAlert()
    )
  }

}
