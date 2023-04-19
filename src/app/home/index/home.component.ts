import { Component, OnInit } from "@angular/core";
import { Observable, Subscription, fromEvent, map, tap } from "rxjs";

import { Icon } from '../../interfaces/icon.interface';

// funcion para obtener el tamaño de la pantalla
const getWidth = (e: any) => e.target.innerWidth;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  socialNetwork: Icon[] = [
    { name: 'linkedin', icon: 'fa-brands fa-linkedin' },
    { name: 'twitter', icon: 'fa-brands fa-square-twitter' },
    { name: 'github', icon: 'fa-brands fa-square-github' },
    { name: 'linkedin', icon: 'fa-solid fa-square-envelope' },
  ]

  cardsPerView: number = 3;

  riseze$!: Observable<Event>;
  resizeSub$!: Subscription;

  ngOnInit(): void {
    // creamos un observable para monitoriar el tamaño de la pantalla
    this.riseze$ = fromEvent<Event>(window, 'resize');
    this.resizeSub$ = this.riseze$.pipe(
      map(getWidth),
    ).subscribe( screen => {
      if(screen < 425 || screen > 1023) this.cardsPerView = 3;
      if(screen > 425 && screen <= 1000) this.cardsPerView = 4;
    });
  }

}
