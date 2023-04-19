import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { TechCard } from '../../../interfaces/tech-card.interface';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss', '../../../../../node_modules/keen-slider/keen-slider.min.css'],
})
export class CarouselComponent {
  @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement> | undefined

  slider!: KeenSliderInstance;
  @Input() cardsPerView!: number;


  techData: TechCard[] = [
    { link: '../../../../assets/images/angular.png', name: 'Angular.js' },
    { link: '../../../../assets/images/java.png', name: 'Java' },
    { link: '../../../../assets/images/react.png', name: 'React.js' },
    { link: '../../../../assets/images/angular.png', name: 'Angular.js' },
    { link: '../../../../assets/images/java.png', name: 'Java' },
    { link: '../../../../assets/images/react.png', name: 'React.js' },
  ]


  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef!.nativeElement,
      {
        loop: true,
        slides: {
          perView: this.cardsPerView,
          spacing: 10,
        },
      },
      [
        (slider) => {
          let timeout: any
          let mouseOver: boolean = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 4000)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        },
      ]
    )
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }


}
