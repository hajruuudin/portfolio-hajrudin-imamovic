import { Component } from '@angular/core';
import { SectionTitle } from "../../components/section-title/section-title";
import { SectionSubtitle } from "../../components/section-subtitle/section-subtitle";

@Component({
  selector: 'app-about',
  imports: [SectionTitle, SectionSubtitle],
  templateUrl: './about.html',
  styleUrl: './about.css',
  host: {
    class: 'w-full h-auto flex flex-col justify-start items-center mt-10'
  }
})
export class About {

}
