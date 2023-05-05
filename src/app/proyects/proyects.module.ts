import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProyectsRoutingModule } from "./proyects-routing.module";
import { SharedModule } from "../shared/shared.module";

import { DetailComponent } from "./pages/detail/detail.component";
import { FormFilterComponent } from "./pages/components/form_filter/form-filter.component";
import { ListComponent } from "./pages/list/list.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    DetailComponent,
    FormFilterComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProyectsRoutingModule,
    SharedModule,
  ]
})
export class ProyectsModule { }
