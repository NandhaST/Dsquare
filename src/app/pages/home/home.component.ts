import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    autoHeight: true,
    autoWidth: false,
    touchDrag: true,
    rtl: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<div class="nav-button owl-prev">‹</div>', '<div class="nav-button owl-next">›</div>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  sedan: any = [
    { "img": "assets/Images/home/car2.jpg", "cardtitle": "Premium Sedan", "card-text": "" },
    { "img": "assets/Images/home/car3.jpg", "cardtitle": "Premium Sedan", "card-text": "" },
    { "img": "assets/Images/home/car3.jpg", "cardtitle": "SUV", "card-text": "" },
    { "img": "assets/Images/home/car2.jpg", "cardtitle": "Sedan", "card-text": "" },

  ]
  prsedan: any = [
    { "img": "assets/Images/home/car2.jpg", "cardtitle": "Premium Sedan", "card-text": "" },
  ]
  suv: any = [
    { "img": "assets/Images/home/car4.jpg", "cardtitle": "SUV", "card-text": "" },
  ]



  gotoabt() {
    this.router.navigateByUrl('/about_us')
    window.scrollTo(0, document.body.scrollHeight / 4);
  }

  gotocars() {
    var scrollbtm = document.getElementById('carsbtm');
    scrollbtm.scrollIntoView(false)
  }

}
