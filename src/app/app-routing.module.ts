import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LichtingenComponent } from './features/lichtingen/lichtingen.component';
import { KrantjesComponent } from './features/krantjes/krantjes.component';
import { ActiviteitenComponent } from './features/activiteiten/activiteiten.component';
import { SplashScreenComponent } from './shared/components/splash-screen/splash-screen.component';
import { LichtingenDetailComponent } from './features/lichtingen/lichtingen-detail/lichtingen-detail.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: "home"
  },
  {
    component: LichtingenComponent,
    path: "lichtingen"
  },
  { path: 'lichting/:id', component: LichtingenDetailComponent },
  {
    component: KrantjesComponent,
    path: "krantjes"
  },
  {
    component: ActiviteitenComponent,
    path: "activiteiten"
  },
  {
    component: SplashScreenComponent,
    path: "splash"
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
