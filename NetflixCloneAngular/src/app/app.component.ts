import { Component, HostListener, OnInit } from '@angular/core';
import { ContentCard, Slider, slider1, slider2, slider3 } from './core/models/content-card';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NetflixCloneAngular';
  portadas: string[] = ['https://occ-0-3791-114.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABepkXuzGaDhQEUpOtCrCzwvPWkC15bY5t_FaLWDAzDEqOI2Ntnc6w29lnpDIJucYrumhQyivBBoWybfGCjud29SzF8wDiyHX49Fi.webp?r=036', 
  'https://occ-0-3791-114.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdC8ahpXnpKXdbQHJRnDhxJiQ-7beBe-2ooYC3mGS1923YfveTVkGsGI2ueI_mw6r1wj6lyaOZ2gZqkSaQL1uLc8dhFOv0PX5nIg.webp?r=8a5'
  ];
  portadaTitulos: string[] = ['https://occ-0-3791-114.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSPH1250SRrVKBtZ_KvOfoX5NtzJtx8-F3RN71pZXNFcANYeLlUfSr5KFWAnWlGojnmjM8GB1jx4cyoMaw2Uk9PFLHpcnSZnW9Nkb3jCWYX8tIw_BNkMH6_dxHp45j8jJ2zrVNJ1qt1UsjDcDMir_2VUikYHSH_gh61zXc0anzfyr-EVZkT38Q.webp?r=07e',
'https://occ-0-3791-114.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABX14LPFNJKl5iqHVD8YJJI-tt1UWRH_h2FOZ-ZXcmTV7Fm1feGyQUJGftu9W6ZDHxzSZe9SUAYUTS1WYgGu2srse-LG3XKKvwcBXY__X2AAaUgHT0VSGhPqfIkSySiq8Bhxl0242EiU7vO-QilGFeFauX7bzUaGlD74zEz7UbKeMGHes_xgK.webp?r=522'];
  portadaDescription: string[] = ['','Una familia con un atroz secreto comienza una nueva vida en Madrid, pero las nuevas relaciones complican sus planes, y el pasado no los deja en paz.']
  portada!: Portada;
  sliders: [Slider,Slider,Slider] = [slider1, slider2, slider3];

  ngOnInit(): void {
    let i: number = this.randomIntFromInterval(0, 1)
    this.portada = {
      imagen: this.portadas[i],
      titulo: this.portadaTitulos[i],
      description: this.portadaDescription[i]
    }
   
  }
  
  randomIntFromInterval(min:number, max:number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.master-head') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('master-head-inverse');
    } else {
      element.classList.remove('master-head-inverse');
    }
  }
}


export interface Portada{
  imagen: string;
  titulo: string;
  description: string;
}

