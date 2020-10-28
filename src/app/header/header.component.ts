import { Component, OnInit, ViewEncapsulation, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fade',
      [
        state('void', style({ opacity: 0})),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)])
      ]
    )
  ],
  providers: [
    Location, {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ]
})

export class HeaderComponent implements OnInit {
  public navbarOpen = false;
  public clicked = false;
  _el: any;
  location: any;
  layoutClass: string;

  toggleNavbar = () => {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(
    private router: Router,
    location: Location,
    @Inject(DOCUMENT) document
  ) { 
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { 
        this.location = location.path();
        if(this.location == '/web-hosting'){
          this.layoutClass = 'p-relative';
        } else {
          this.layoutClass = '';
        }
      }
    });
  }

  ngOnInit() { 
  }

  onClick(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicked = true;
  }

  @HostListener('window:click', ['$event'])
  clickedOutside(e): void {
    if(this.clicked){
      this._el.nativeElement.querySelector('dropdown-menu').classList.toogle('show')
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e){
    if(window.pageYOffset > 550){
      let element = document.getElementById('header');
      element.classList.add('is-sticky');
    } else {
      let element = document.getElementById('header');
      element.classList.remove('is-sticky');
    }
  }

}
