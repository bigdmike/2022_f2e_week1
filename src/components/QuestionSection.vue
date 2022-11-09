<template>
  <section ref="MainContent" class="relative w-full h-[500vh] bg-black">
    <div ref="QuestionBox" class="absolute top-0 left-0 w-full h-screen">
      <div
        class="absolute inline-block left-1/2 top-32 question_line whitespace-nowrap"
      >
        <h3 class="text-white font-pixel text-8xl">羨慕別人酷酷的網頁動畫</h3>
        <img
          src="/img/character/ghost_blue.svg"
          class="absolute h-full transform translate-x-full -translate-y-1/2 -right-10 top-1/2"
        />
        <img
          src="/img/pacman_yellow_open.svg"
          class="absolute -right-20 h-full transform translate-x-[200%] -translate-y-1/2 top-1/2"
        />
      </div>
      <div
        class="absolute inline-block right-1/2 top-1/2 question_line whitespace-nowrap"
      >
        <h3 class="text-white font-pixel text-8xl">動畫技能樹太雜無從下手</h3>
        <img
          src="/img/character/ghost_purple.svg"
          class="absolute h-full transform -translate-x-full -translate-y-1/2 -scale-x-100 -left-10 top-1/2"
        />
        <img
          src="/img/pacman_yellow_open.svg"
          class="absolute -left-20 h-full transform -scale-x-100 -translate-x-[200%] -translate-y-1/2 top-1/2"
        />
      </div>
      <div
        class="absolute inline-block bottom-32 left-1/2 question_line whitespace-nowrap"
      >
        <h3 class="text-white font-pixel text-8xl">滿足不了同事的許願</h3>
        <img
          src="/img/character/ghost_orange.svg"
          class="absolute h-full transform translate-x-full -translate-y-1/2 -right-10 top-1/2"
        />
        <img
          src="/img/pacman_yellow_open.svg"
          class="absolute -right-20 h-full transform translate-x-[200%] -translate-y-1/2 top-1/2"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from '@/gsap/gsap_loader';
export default {
  name: 'QuestionSection',
  mounted() {
    let question_line =
      this.$refs.MainContent.querySelectorAll('.question_line');
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.$refs.MainContent,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        pin: this.$refs.QuestionBox,
      },
    });

    tl.fromTo(
      question_line[0],
      {
        x: '-250%',
      },
      {
        x: '-50%',
      }
    );
    tl.fromTo(
      question_line[1],
      {
        y: '-50%',
        x: '250%',
      },
      {
        y: '-50%',
        x: '50%',
      }
    );
    tl.fromTo(
      question_line[2],
      {
        x: '-250%',
      },
      {
        x: '-50%',
      }
    );
  },
};
</script>
