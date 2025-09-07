import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-attribute',
  imports: [],
  templateUrl: './project-attribute.html',
  styleUrl: './project-attribute.css',
  host: {
    class: 'my-1.5'
  }
})
export class ProjectAttribute {
  @Input() name : string = ""
}
