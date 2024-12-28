import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DzComponent } from "./dz/dz.component";

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, MainComponent],
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-project-angular';
  nav = [
    { href: '/', title: 'Home' },
    { href: '/Les1', title: 'Les1 template lang' },
    { href: '/Les2', title: 'Les2 components' },
    { href: '/dz', title: 'Home work' },
  ];
}
