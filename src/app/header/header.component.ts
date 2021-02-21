import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.menus[0];
  }

  menus: any = [
    { "name": "Home", "url": "home", "css":"home"},
    { "name": "About Us", "url": "about_us" },
    { "name": "Tariff", "url": "tariff" },
    { "name": "Faq & Tc", "url": "faq&tc" },
    { "name": "Cancel & Luggage", "url": "cancel&lugg" },
    { "name": "Contact", "url": "contact" }
  ]

  menuLink(url: any) {
    this.router.navigate([`${url}`]);
  }

}
