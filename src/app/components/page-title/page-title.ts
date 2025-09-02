import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-page-title',
  imports: [],
  templateUrl: './page-title.html',
  styleUrl: './page-title.css'
})
export class PageTitle {
  @Input() public sectionTitle : string = ""
}
