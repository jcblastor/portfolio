import { Component, Input } from "@angular/core";
import { TechCard } from '../../interfaces/tech-card.interface';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss'],
})
export class TechComponent {
  @Input() tech: TechCard = {
    link: '',
    name: 'no-name'
  }
}
