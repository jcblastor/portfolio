import { Component, Input } from "@angular/core";

import { Icon } from '../../interfaces/icon.interface';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.scss'],
})
export class SocialNetworkComponent {
  @Input() icon!: Icon;
}
