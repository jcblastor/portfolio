import { Component, ElementRef, ViewChild } from "@angular/core"
import KeenSlider, { KeenSliderInstance } from "keen-slider"

@Component({
  selector: "app-carousel-detail",
  templateUrl: "./carousel-detail.component..html",
  styleUrls: [
    "../../../../../../node_modules/keen-slider/keen-slider.min.css",
    "./carousel-detail.component..scss",
  ],
})
export class CarouselDetailComponent {
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>

  currentSlide: number = 1
  dotHelper: Array<Number> = []
  slider!: KeenSliderInstance;

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        initial: this.currentSlide,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel
        },
      })
      this.dotHelper = [
        ...Array(this.slider.track.details.slides.length).keys(),
      ]
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}
