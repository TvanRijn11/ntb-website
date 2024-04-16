import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LichtingenComponent } from './components/lichtingen/lichtingen.component';
import { KrantjesComponent } from './components/krantjes/krantjes.component';
import { ActiviteitenComponent } from './components/activiteiten/activiteiten.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SplashScreenComponent,
    NavBarComponent,
    FooterComponent,
    LichtingenComponent,
    KrantjesComponent,
    ActiviteitenComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  exports: [SplashScreenComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
