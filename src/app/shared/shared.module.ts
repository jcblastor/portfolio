import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImgHeroComponent } from "./img-hero/img-hero.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SocialNetworkComponent } from "./social-network/social-network.component";
import { TechComponent } from "./tech/tech.component";
import { CardComponent } from "./card/card.component";

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    ImgHeroComponent,
    SocialNetworkComponent,
    TechComponent,
    CardComponent,
    FooterComponent,
  ],
  imports:[
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    ImgHeroComponent,
    SocialNetworkComponent,
    TechComponent,
    CardComponent,
    FooterComponent,
  ],
})
export class SharedModule { }
