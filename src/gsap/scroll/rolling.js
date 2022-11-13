import { ScrollTrigger } from '@/gsap/gsap_loader';

export class Scroll {
  constructor(options) {
    this.tweens = [];
    this.els = [];
    this.options = {
      start: '0% 80%',
      scrub: 1,
      ease: 'none',
      ...options,
    };

    ScrollTrigger.defaults({ ...this.options });
  }

  destroy() {
    while (this.tweens.length) {
      let tween = this.tweens.pop();
      tween.scrollTrigger.kill(true);
      tween.kill();
      tween = null;
    }
  }

  refresh() {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }
}
