import { NgModule } from "@angular/core";

import { AboutMeRoutingModule } from "./about-me-routing.module";
import { SharedModule } from "../shared/shared.module";

import { ContactMeComponent } from "./pages/contact-me/contact-me.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { ButtonComponent } from "./components/button/button.component";

@NgModule({
  declarations: [
    ProfileComponent,
    ButtonComponent,
    ContactMeComponent,
  ],
  imports: [
    AboutMeRoutingModule,
    SharedModule,
  ]
})
export class AboutMeModule { }
