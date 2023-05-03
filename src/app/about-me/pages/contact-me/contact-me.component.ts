import { Component } from "@angular/core";
import { Icon } from '../../../interfaces/icon.interface';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  socialNetwork: Icon[] = [
    { name: 'linkedin', icon: 'fa-brands fa-linkedin' },
    { name: 'twitter', icon: 'fa-brands fa-square-twitter' },
    { name: 'github', icon: 'fa-brands fa-square-github' },
    { name: 'linkedin', icon: 'fa-solid fa-square-envelope' },
  ]
}
