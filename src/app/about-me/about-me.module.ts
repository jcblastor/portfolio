import { NgModule } from "@angular/core";

import { AboutMeRoutingModule } from "./about-me-routing.module";


import { ContactMeComponent } from "./pages/contact-me/contact-me.component";
import { ProfileComponent } from "./pages/profile/profile.component";

@NgModule({
  declarations: [
    ProfileComponent,
    ContactMeComponent,
  ],
  imports: [
    AboutMeRoutingModule,
  ]
})
export class AboutMeModule { }
