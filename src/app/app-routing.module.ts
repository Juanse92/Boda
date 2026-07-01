import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeddingComponent } from './wedding/wedding.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: 'i/:id', component: LandingComponent },
  { path: '',      component: WeddingComponent },
  { path: '**',    redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
