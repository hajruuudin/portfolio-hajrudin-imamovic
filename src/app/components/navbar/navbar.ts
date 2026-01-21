import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  host: {
    class: "sticky -bottom-12 md:w-1/2 w-3/4 h-12 z-50 self-center rounded-2xl transition-all duration-300 max-w-[1366px]"
  }
})
export class Navbar {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]).then(() => {
      // Scroll to the main content area after navigation
      const mainContainer = document.getElementById('main-container');
      if (mainContainer) {
        mainContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}
