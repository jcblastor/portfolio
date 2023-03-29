import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menuOptions: string[] = ['/', '/proyects/list', '/about-me/profile', '/about-me/contact-me'];

  isMenuOption: boolean = false;

  constructor( private readonly router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe( url => {
      if( url instanceof NavigationEnd) {
        if ( this.menuOptions.includes(this.router.url)) {
          this.isMenuOption = true;
        }
      }
    })
  }
}
