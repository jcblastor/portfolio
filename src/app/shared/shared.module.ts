import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImgHeroComponent } from "./img-hero/img-hero.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    ImgHeroComponent,
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
    FooterComponent,
  ],
})
export class SharedModule { }
