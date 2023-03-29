import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { DescriptionComponent } from "./components/description/description.component";

import { HomeComponent } from "./index/home.component";

@NgModule({
  declarations: [
    HomeComponent,
    DescriptionComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule { }
