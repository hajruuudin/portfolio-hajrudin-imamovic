import { Component } from '@angular/core';
import { SectionTitle } from "../../components/section-title/section-title";
import { SectionSubtitle } from "../../components/section-subtitle/section-subtitle";
import { LanguageIcon } from "../../components/language-icon/language-icon";

@Component({
  selector: 'app-other',
  imports: [SectionTitle, SectionSubtitle, LanguageIcon],
  templateUrl: './other.html',
  styleUrl: './other.css',
  host: {
    class: "w-full h-auto flex flex-col justify-start items-center mt-10"
  }
})
export class Other {
   currentDescription: string = 'All of my certificates of competitons and courses I have.';

  setDescription(text: string) {
    this.currentDescription = text;
  }

  resetDescription() {
    this.currentDescription = 'All of my certificates of competitons and courses I have.';
  }
}
