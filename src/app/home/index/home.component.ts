import { Component } from "@angular/core";
import { Icon } from '../../interfaces/icon.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  socialNetwork: Icon[] = [
    { name: 'linkedin', icon: 'fa-brands fa-linkedin' },
    { name: 'twitter', icon: 'fa-brands fa-square-twitter' },
    { name: 'github', icon: 'fa-brands fa-square-github' },
    { name: 'linkedin', icon: 'fa-solid fa-square-envelope' },
  ]
}
