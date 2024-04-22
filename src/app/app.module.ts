import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './features/home/home.component';
import { SplashScreenComponent } from './shared/components/splash-screen/splash-screen.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LichtingenComponent } from './features/lichtingen/lichtingen.component';
import { KrantjesComponent } from './features/krantjes/krantjes.component';
import { ActiviteitenComponent } from './features/activiteiten/activiteiten.component';
import { TextPictureComponent } from './shared/components/text-picture/text-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SplashScreenComponent,
    NavBarComponent,
    FooterComponent,
    LichtingenComponent,
    KrantjesComponent,
    ActiviteitenComponent,
    TextPictureComponent
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
