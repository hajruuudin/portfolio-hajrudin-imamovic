import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-subtitle',
  imports: [],
  templateUrl: './section-subtitle.html',
  styleUrl: './section-subtitle.css'
})
export class SectionSubtitle {
  @Input() title : string = "";
}
