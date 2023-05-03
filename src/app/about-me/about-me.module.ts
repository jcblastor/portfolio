import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { AboutMeRoutingModule } from "./about-me-routing.module";
import { SharedModule } from "../shared/shared.module";

import { ContactMeComponent } from "./pages/contact-me/contact-me.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { ButtonComponent } from "./components/button/button.component";
import { FormComponent } from "./components/form/form.component";

@NgModule({
  declarations: [
    ButtonComponent,
    ContactMeComponent,
    FormComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AboutMeRoutingModule,
    SharedModule,
  ]
})
export class AboutMeModule { }
