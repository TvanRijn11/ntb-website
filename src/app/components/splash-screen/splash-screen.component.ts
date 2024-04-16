import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
  windowHeight!: string; // Changed from windowWidth to windowHeight
  showSplash = true;
  showTopLogo = false;
  showBottomLogo = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.showTopLogo = true; // Show the logo after a delay
    }, 1000); // Adjust delay as needed
    setTimeout(() => {
      this.showBottomLogo = true; // Show the logo after a delay
    }, 2000);
    setTimeout(() => {
      this.showSplash = false
    }, 4000);
  }


}
