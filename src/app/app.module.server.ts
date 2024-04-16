import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';

@NgModule({
  imports: [
    AppModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
