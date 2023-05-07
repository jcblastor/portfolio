import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProyectsRoutingModule } from "./proyects-routing.module";
import { SharedModule } from "../shared/shared.module";

import { DetailComponent } from "./pages/detail/detail.component";
import { FormFilterComponent } from "./pages/components/form_filter/form-filter.component";
import { ListComponent } from "./pages/list/list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CarouselDetailComponent } from "./pages/components/carousel_detail/carousel-detail.component";

@NgModule({
  declarations: [
    DetailComponent,
    FormFilterComponent,
    ListComponent,
    CarouselDetailComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProyectsRoutingModule,
    SharedModule,
  ]
})
export class ProyectsModule { }
