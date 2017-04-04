import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'psp-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  accountItems: Object[];
  helpItems: Object[];
  chaikinItems: Object[];

  constructor() { }

  ngOnInit() {
    this.accountItems = [
      {icon: '/123', desc: 'Preferences', link: '#'},
      {icon: '/123', desc: 'My Profile', link: '#'},
      {icon: '/123', desc: 'Billing details', link: '#'}
    ];
    this.helpItems = [
      {icon: '/abc', desc:'Read the resource guide', link: '#'},
      {icon: '/abc', desc: 'Check the glossary of terms', link: '/glossary'},
      {icon: '/abc', desc: 'Read a few FAQs', link: '#'},
      {icon:'/abc', desc: 'Contact a representative', link: '#'}
    ];
    this.chaikinItems = [
      {icon: '/foo', desc: 'The first choice!', link: '#'},
      {icon: '/bar', desc: 'And another choice for you.', link: '#'},
      {icon: '/foobar', desc: 'but wait! A third!', link: '#'}
    ];
  }

}
