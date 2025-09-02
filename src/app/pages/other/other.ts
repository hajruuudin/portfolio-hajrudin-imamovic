import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PageTitle } from "../../components/page-title/page-title";

@Component({
  selector: 'app-other',
  imports: [PageTitle],
  templateUrl: './other.html',
  styleUrl: './other.css'
})
export class Other {
  private title : string = 'Other - Hajrudin Imamovic'

  constructor(
    protected titleService : Title
  ){}

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
  }
}
