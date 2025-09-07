import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-language-icon',
  imports: [],
  templateUrl: './language-icon.html',
  styleUrl: './language-icon.css',
  host: {
    class: "p-6 flex flex-col space-y-4 justify-center items-center bg-(--background-800) rounded-2xl"
  }
})
export class LanguageIcon {
  @Input() icon : string = ''
  @Input() level : string = ''
}
