import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isShow: boolean;
  topPosToStartShowing = 100;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void { }



  @HostListener('window:scroll')
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

 /**
   * Window scroll hide in top method
   */
  windowScroll() {
    var scrolltop = document.getElementById('backToTopID');
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
      scrolltop.style.display= 'block';
    } else {
      scrolltop.style.display= 'none';
    }
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
