import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { identity } from 'rxjs';



@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  host: {
    class: "sticky -bottom-12 md:w-1/2 w-3/4 h-12 z-50 bg-black self-center rounded-2xl transition-all duration-300 max-w-[1366px]"
  }
})
export class Navbar {

}
