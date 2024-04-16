import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LichtingenComponent } from './components/lichtingen/lichtingen.component';
import { KrantjesComponent } from './components/krantjes/krantjes.component';
import { ActiviteitenComponent } from './components/activiteiten/activiteiten.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: "home"
  },
  {
    component: LichtingenComponent,
    path: "lichtingen"
  },
  {
    component: KrantjesComponent,
    path: "krantjes"
  },
  {
    component: ActiviteitenComponent,
    path: "activiteiten"
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
