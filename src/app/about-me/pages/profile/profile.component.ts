import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {

  constructor(private readonly router: Router) { }

  navigateTo() {
    this.router.navigate(['about-me/contact-me'])
  }
}
