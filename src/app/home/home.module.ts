import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { SharedModule } from "../shared/shared.module";
import { DescriptionComponent } from "./components/description/description.component";

import { HomeComponent } from "./index/home.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    HomeComponent,
    DescriptionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule { }
