import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

class Sketch {
  constructor() {
    this.container = document.querySelector('[data-container]');
    this.pin = this.container.querySelector('[data-pin]');
    this.titles = this.pin.querySelectorAll('.pin-el__link');
    this.card = this.pin.querySelector('[data-card]');
    this.animEl = document.querySelector('[data-anim-el]');
    this.indicator = this.container.querySelector('.pin-el__indicator');
    this.pinActive = false;
    this.index = 0;

    ScrollTrigger.create({
      pin: this.pin,
      trigger: this.container,
      start: 'top top',
      end: `+=${window.innerHeight * this.titles.length}`,
      onToggle: (self) => {
        this.pinActive = self.isActive;
      },
      onUpdate: (self) => {
        const progress = Number(self.progress.toFixed(3));
        const total = this.titles.length;

        this.titles.forEach((title, i) => {
          const oldIndex = i;
          const newIndex = oldIndex + 1;

          if (progress > oldIndex / total && progress < newIndex / total) {
            this.titles[oldIndex].classList.add('is-active');

            if (self.direction === 1 && oldIndex > 0) {
              this.titles[oldIndex - 1].classList.remove('is-active');
            } else if (self.direction === -1 && newIndex < this.titles.length) {
              this.titles[newIndex].classList.remove('is-active');
            }
          }
        });
        // console.log(
        //   "progress:",
        //   self.progress.toFixed(3),
        //   "direction:",
        //   self.direction,
        //   "velocity",
        //   self.getVelocity()
        // );
      },
    });

    // this.resize();
    this.run();
  }

  setActiveIndex() {
    this.indicator.innerHTML = this.index;
  }

  run() {
    this.setActiveIndex();
    this.bounds = this.card.getBoundingClientRect();
    this.animEl.style.width = `${this.bounds.width}px`;
    this.animEl.style.height = `${this.bounds.height}px`;
    this.animEl.style.left = `${this.bounds.left}px`;
    this.animEl.style.transform = `translate3d(0, ${this.bounds.top}px, 0)`;

    window.requestAnimationFrame(this.run.bind(this));
  }
}

new Sketch();
