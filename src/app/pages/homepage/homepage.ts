import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PageTitle } from "../../components/page-title/page-title";

@Component({
  selector: 'app-homepage',
  imports: [PageTitle],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage implements OnInit{
  private title : string = 'Homepage - Hajrudin Imamovic'

  constructor(
    protected titleService : Title
  ){}

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
  }
}
