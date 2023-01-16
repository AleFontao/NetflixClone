import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ContentCard, Slider } from '../models/content-card';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  
  
  sliderContent!: ContentCard[];
  indexBorrado: number = 0;
  index: number = 0;
  maxIndex: number = 0;
  @ViewChild('slidesContainer') slidesContainer!: any;
  @Input()
  slider!: Slider;
  cards!: any;
  constructor() { }

  ngOnInit() {
    this.sliderContent = this.slider.slider;
    this.cards = this.slider.slider;
  }


  right() {
    this.index++;
    this.indexBorrado = 0;
    if (this.maxIndex <= this.index) {
      this.addContentRight();
    }
    const slideWidth = this.slidesContainer.nativeElement.clientWidth;
    
    this.slidesContainer!.nativeElement.scrollLeft += slideWidth;

    console.log(this.sliderContent)
  }

  left() {
    this.index--;
    this.indexBorrado++;
    if (this.indexBorrado == 2) {
      this.indexBorrado = 0;
      this.removeContent();
      
    }
    const slideWidth = this.slidesContainer.nativeElement.clientWidth;
    this.slidesContainer!.nativeElement.scrollLeft -= slideWidth;
  }

  addContentRight() {
    this.maxIndex++;
    this.cards = this.cards.concat(this.sliderContent)
  }


  removeContent() {
    this.cards.splice(this.cards.length - this.sliderContent.length, this.cards.length)
  }

  resetIndexStart() {
    this.index = 1;
    var newArray = this.sliderContent.concat(this.cards);
    this.cards = newArray;
  }

}
