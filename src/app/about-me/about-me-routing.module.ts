import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';


import { ContactMeComponent } from "./pages/contact-me/contact-me.component";
import { ProfileComponent } from "./pages/profile/profile.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'contact-me', component: ContactMeComponent },
      { path: '**', redirectTo: 'profile' },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ],
})
export class AboutMeRoutingModule { }
