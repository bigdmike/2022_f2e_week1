<template>
  <section
    ref="MainContent"
    class="relative z-10 w-full py-40 bg-primary_yellow"
  >
    <div class="relative w-full max-w-screen-xl px-10 mx-auto xl:px-0">
      <header class="mb-32">
        <div class="relative mb-5">
          <h2
            class="relative z-10 tracking-tighter text-black text-7xl font-pixel"
          >
            Sponsor
          </h2>
          <span
            class="absolute top-0 left-0 z-0 tracking-tighter transform translate-x-1 translate-y-1 text-primary_purple text-7xl font-pixel"
            >Sponsor</span
          >
        </div>
        <h3 class="text-4xl text-primary_purple font-pixel">贊助商</h3>
      </header>

      <div ref="FirstDialog" class="relative w-full px-20 py-16 mb-32 bg-white">
        <div
          class="absolute left-0 right-0 flex items-start -top-2 whitespace-nowrap"
        >
          <span class="block w-10 h-2 bg-black"></span>
          <div
            class="relative flex-1 px-5 transform -translate-y-1/2 font-pixel"
          >
            <h3 class="relative z-10 w-full text-6xl font-pixel">
              鑽石級贊助商
            </h3>
            <span
              class="text-[#FBBF00] text-6xl font-pixel absolute top-0 left-5 z-0 transform translate-x-[4px] translate-y-[4px]"
            >
              鑽石級贊助商</span
            >
          </div>
          <span class="block w-full h-2 bg-black"></span>
        </div>
        <span
          class="absolute left-0 right-0 flex items-stretch w-full h-2 -bottom-2"
        >
          <span class="w-24 h-2 bg-black"></span>
          <span class="relative w-6 text-center bg-transparent">
            <span class="block w-6 h-2 bg-white"></span>
            <div class="flex">
              <span class="w-2 h-2 bg-black"></span>
              <span class="w-2 h-2 bg-white"></span>
              <span class="w-2 h-2 bg-black"></span>
            </div>
            <span class="block w-2 h-2 mx-auto bg-black"></span>
          </span>
          <span class="flex-1 h-2 bg-black"></span>
        </span>
        <span
          class="absolute top-0 bottom-0 w-2 h-full bg-black -left-2"
        ></span>
        <span
          class="absolute top-0 bottom-0 w-2 h-full bg-black -right-2"
        ></span>

        <ol class="flex items-center -mx-10">
          <li class="w-1/3 px-10">
            <img src="/img/sponsor/sponsor_img.png" class="block w-full" />
          </li>
          <li class="w-1/3 px-10">
            <img src="/img/sponsor/sponsor_img-1.png" class="block w-full" />
          </li>
          <li class="w-1/3 px-10">
            <img src="/img/sponsor/sponsor_img-2.png" class="block w-full" />
          </li>
        </ol>
      </div>

      <div ref="SecondDialog" class="relative w-full px-20 py-16 bg-white">
        <div
          class="absolute left-0 right-0 flex items-start -top-2 whitespace-nowrap"
        >
          <span class="block w-full h-2 bg-black"></span>
          <div
            class="relative flex-1 px-5 transform -translate-y-1/2 font-pixel"
          >
            <h3 class="relative z-10 w-full text-6xl font-pixel">共同推廣</h3>
            <span
              class="text-[#FBBF00] text-6xl font-pixel absolute top-0 left-5 z-0 transform translate-x-[4px] translate-y-[4px]"
            >
              共同推廣</span
            >
          </div>
          <span class="block w-10 h-2 bg-black"></span>
        </div>
        <span
          class="absolute left-0 right-0 flex items-stretch w-full h-2 -bottom-2"
        >
          <span class="flex-1 h-2 bg-black"></span>
          <span class="relative w-6 text-center bg-transparent">
            <span class="block w-6 h-2 bg-white"></span>
            <div class="flex">
              <span class="w-2 h-2 bg-black"></span>
              <span class="w-2 h-2 bg-white"></span>
              <span class="w-2 h-2 bg-black"></span>
            </div>
            <span class="block w-2 h-2 mx-auto bg-black"></span>
          </span>
          <span class="w-24 h-2 bg-black"></span>
        </span>
        <span
          class="absolute top-0 bottom-0 w-2 h-full bg-black -left-2"
        ></span>
        <span
          class="absolute top-0 bottom-0 w-2 h-full bg-black -right-2"
        ></span>

        <ol class="flex items-center -mx-10">
          <li class="w-1/3 px-10">
            <img src="/img/sponsor/sponsor_img-3.png" class="block w-full" />
          </li>
          <li class="w-1/3 px-10">
            <img src="/img/sponsor/sponsor_img-4.png" class="block w-full" />
          </li>
          <li class="w-1/3 px-10">
            <img src="/img/sponsor/sponsor_img-5.png" class="block w-full" />
          </li>
        </ol>
      </div>
    </div>
    <div
      class="absolute bottom-0 flex items-center justify-end w-full max-w-screen-xl pr-20 transform -translate-x-1/2 left-1/2"
    >
      <div class="flex items-center">
        <img src="/img/character/ghost_blue.svg" class="mr-10 w-14" />
        <img src="/img/character/ghost_purple.svg" class="mr-10 w-14" />
        <img src="/img/character/ghost_orange.svg" class="mr-10 w-14" />
        <img src="/img/character/ghost_red.svg" class="w-14" />
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from '@/gsap/gsap_loader';
export default {
  name: 'MainContent',
  mounted() {
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: this.$refs.MainContent,
        start: 'center center',
        // end: 'bottom top',
        // scrub: true,
      },
    });

    timeline
      .fromTo(
        this.$refs.FirstDialog,
        {
          //   y: '30%',
          scale: 0,
          transformOrigin: 'left bottom',
        },
        {
          //   y: '-50%',
          scale: 1,
          transformOrigin: 'left bottom',
          //   ease: 'power3.inOut',
        },
        'sametime'
      )
      .fromTo(
        this.$refs.SecondDialog,
        {
          //   y: '30%',
          scale: 0,
          transformOrigin: 'right bottom',
        },
        {
          //   y: '-50%',
          scale: 1,
          transformOrigin: 'right bottom',
          //   ease: 'power3.inOut',
        },
        'sametime'
      );
  },
};
</script>
