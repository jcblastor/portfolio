import { NgModule } from "@angular/core";

import { ProyectsRoutingModule } from "./proyects-routing.module";

import { DetailComponent } from "./pages/detail/detail.component";
import { ListComponent } from "./pages/list/list.component";

@NgModule({
  declarations: [
    DetailComponent,
    ListComponent,
  ],
  imports: [
    ProyectsRoutingModule
  ]
})
export class ProyectsModule { }
