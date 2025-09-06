import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: {
    class: 'flex flex-col justify-start items-stretch'
  }
})
export class App {
  protected readonly title = signal('portfolio-hajrudin-imamovic');

   private onScroll = () => {
    const scrollY = window.scrollY;

    const background = document.getElementById("background");
    const layer1 = document.getElementById("layer_01");
    const layer2 = document.getElementById("layer_02");
    const layer3 = document.getElementById("layer_03");
    const layerNav = document.getElementById("layer_nav");
    const headerContainer = document.getElementById("header-container");

    if (background) {
      background.style.transform = `translateY(${scrollY * -0.1}px)`;

      let opacity = 1 - scrollY / 500;
      if (opacity < 0) opacity = 0;
      background.style.opacity = opacity.toString();
    }
    if (layer1) {
      layer1.style.transform = `translateY(${scrollY * 0.6}px)`;
    }
    if (layer2) {
      layer2.style.transform = `translateY(${scrollY * 0.4}px)`;
    }
    if (layer3) {
      layer3.style.transform = `translateY(${scrollY * 0.2}px)`;
    }
    if (layerNav) {
      layerNav.style.transform = `translateY(${scrollY * 0.1}px)`;
    }
    if (headerContainer){
      headerContainer.style.transform = `translateY(${scrollY * 0.5}px)`
      
      let opacity = 1 - scrollY / 500;
      if (opacity < 0) opacity = 0;
      headerContainer.style.opacity = opacity.toString();
    }
  };

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  }
}
