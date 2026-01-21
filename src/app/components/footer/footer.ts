import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  host: {
    class: "w-[90%] md:w-3/4 h-auto py-6 my-4 max-w-[1366px] flex flex-col md:flex-row justify-center md:justify-between items-center gap-6"
  }
})
export class Footer {

}
