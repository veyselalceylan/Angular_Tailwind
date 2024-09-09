import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {
  slides = [1, 2, 3];
  currentIndex = 0;
  interval: any;
  isDragging = false;
  startX: number = 0;
  scrollLeft: number = 0;
  slider: HTMLElement | null = null;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 10000); // 10 saniye
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  @HostListener('window:mouseup')
  @HostListener('window:mouseleave')
  stopDragging() {
    if (this.isDragging) {
      this.isDragging = false;
      this.slider?.removeEventListener('mousemove', this.onDragging);
      this.slider?.removeEventListener('mouseup', this.stopDragging);
    }
  }

  startDragging(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.pageX;
    this.scrollLeft = this.currentIndex * window.innerWidth;

    if (this.slider) {
      this.slider.addEventListener('mousemove', this.onDragging.bind(this));
      this.slider.addEventListener('mouseup', this.stopDragging.bind(this));
    }
  }

  onDragging(event: MouseEvent) {
    if (!this.isDragging) return;

    const x = event.pageX;
    const walk = (x - this.startX) * 2; // scroll-hızı
    const newIndex = Math.min(
      Math.max(0, Math.round((this.scrollLeft - walk) / window.innerWidth)),
      this.slides.length - 1
    );

    this.currentIndex = newIndex;
  }

  @HostListener('window:resize')
  onResize() {
    this.updateSlidePosition();
  }

  private updateSlidePosition() {
    // Pozisyon güncelleme işlemleri yapılabilir
  }
}
