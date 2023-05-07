import { Component } from "@angular/core";

import { TechCard } from '../../../interfaces/tech-card.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  techData: TechCard[] = [
    { link: '../../../../assets/images/angular.png', name: 'Angular.js' },
    { link: '../../../../assets/images/java.png', name: 'Java' },
    { link: '../../../../assets/images/react.png', name: 'React.js' },
  ]
}
