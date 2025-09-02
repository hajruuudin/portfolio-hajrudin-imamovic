import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PageTitle } from "../../components/page-title/page-title";

@Component({
  selector: 'app-projects',
  imports: [PageTitle],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  private title : string = 'Projects - Hajrudin Imamovic'

  constructor(
    protected titleService : Title
  ){}

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
  }
}
