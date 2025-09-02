import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PageTitle } from "../../components/page-title/page-title";

@Component({
  selector: 'app-experience',
  imports: [PageTitle],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  private title : string = 'Experience - Hajrudin Imamovic'

  constructor(
    protected titleService : Title
  ){}

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
  }
}
