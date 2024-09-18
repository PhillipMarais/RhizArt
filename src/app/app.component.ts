import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Rhizart-portfolio';
  isDesktop: boolean = false;

  constructor(private platform: Platform) {}

  ngOnInit(): void {
    this.isDesktop = this.platform.isBrowser && !this.platform.ANDROID && !this.platform.IOS;
  }
}
