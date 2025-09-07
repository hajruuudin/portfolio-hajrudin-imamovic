import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  host: {
    class: "w-3/4 h-auto my-2 max-w-[1366px] flex flex-col md:flex-row jusitfy-center md:justify-between items-center"
  }
})
export class Footer {

}
