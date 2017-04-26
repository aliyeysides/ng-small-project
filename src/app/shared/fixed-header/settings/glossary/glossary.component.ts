import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'psp-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss']
})
export class GlossaryComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
