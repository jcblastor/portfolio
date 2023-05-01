import { Component } from "@angular/core";
import { Card } from "src/app/interfaces/card.interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  card: Card = {
    id: 1,
    title: 'My proyecto',
    description: "probando la descripción del proyecto",
    image:'../../../assets/images/shop.jpg',
    techList: [
      { link: '../../../assets/images/angular.png', name: 'Angular.js' },
      { link: '../../../assets/images/java.png', name: 'Java' },
      { link: '../../../assets/images/react.png', name: 'React.js' },
    ],
    link_deploy: "google.com.ar",
    link_repository: "github.com"
  }
}
