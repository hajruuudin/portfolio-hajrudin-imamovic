import { Component } from '@angular/core';
import { SectionTitle } from "../../components/section-title/section-title";
import { ProjectAttribute } from "../../components/project-attribute/project-attribute";

@Component({
  selector: 'app-projects',
  imports: [SectionTitle, ProjectAttribute],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  host: {
    class: "w-full h-auto flex flex-col justify-start items-center mt-10"
  }
})
export class Projects {

}
