import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DetailComponent } from "./pages/detail/detail.component";
import { ListComponent } from "./pages/list/list.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'list', component: ListComponent },
      { path: 'detail', component: DetailComponent },
      { path: '**', redirectTo: 'list' },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ],
})
export class ProyectsRoutingModule { }
