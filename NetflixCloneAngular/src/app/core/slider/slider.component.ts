import { Component, OnInit } from '@angular/core';
import { cards, ContentCard } from '../models/content-card';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  cards!: ContentCard[];
  sliderContent: ContentCard[] = cards;
  index: number = 1;

  slidesContainer!: HTMLElement | null;
  constructor() { }

  ngOnInit() {
    this.cards = cards;
    this.slidesContainer = document.getElementById("slides-container");
  }
  right() {
    this.index++;
    console.log(this.index + " " + this.cards.length % this.index);
    if (this.cards.length % this.index != 0) {
      this.resetIndex();
    }

    const slideWidth = this.slidesContainer!.clientWidth;
    this.slidesContainer!.scrollLeft += slideWidth;
  }

  left() {
    if (this.index > 1) {
      this.index--;
    }
    console.log(this.index + " " + this.cards.length % this.index);
    const slideWidth = this.slidesContainer!.clientWidth;
    this.slidesContainer!.scrollLeft -= slideWidth;
  }

  resetIndex() {
    this.index = 1;
    this.sliderContent.forEach(element => this.cards.push(element))
  }



}
