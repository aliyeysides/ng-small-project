import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'psp-secondary-header',
  templateUrl: './secondary-header.component.html',
  styleUrls: ['./secondary-header.component.scss']
})
export class SecondaryHeaderComponent implements OnInit {

  public closeIconVisible: boolean;

  constructor(private location: Location,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.closeIconVisible = false;

    this.router.events.subscribe(res => {
        if (res instanceof NavigationEnd) {
          let fn = this.route.children[0].component;
          let componentName = fn['name'];

          if (componentName === 'InsightDetailComponent') {
            this.closeIconVisible = true;
          } else {
            this.closeIconVisible = false;
          }
        }
      }
    )
  }

  goBack(): void {
    this.location.back();
  }

}
