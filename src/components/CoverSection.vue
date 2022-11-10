<template>
  <section
    ref="MainContent"
    class="relative flex items-center justify-center w-full h-screen overflow-hidden bg-black"
  >
    <!-- 跑馬燈 -->
    <MainTitleMarquee class="absolute left-0 top-5" />
    <MainTitleMarquee class="absolute left-0 bottom-5" :reverse="true" />
    <!-- 跑馬燈 -->

    <!-- GHOST -->
    <img
      ref="RightGhost"
      src="/img/character/ghost_orange.svg"
      class="absolute md:-bottom-10 sm:-bottom-12 -bottom-4 md:-right-10 sm:-right-20 -right-5 transform -rotate-[20deg] -scale-x-100 sm:w-60 w-24 z-10"
    />
    <img
      ref="TopGhost"
      src="/img/character/ghost_blue.svg"
      class="absolute md:-top-20 sm:-top-14 -top-6 md:left-80 sm:left-16 left-8 transform -rotate-[200deg] md:w-60 sm:w-40 w-20 z-10"
    />
    <div
      ref="LeftGhost"
      class="absolute z-10 flex items-center sm:-bottom-8 -bottom-2 md:left-36 sm:left-10 left-8"
    >
      <img
        src="/img/character/ghost_purple.svg"
        class="mr-4 sm:mr-5 sm:w-32 w-14"
      />
      <img src="/img/character/ghost_red.svg" class="sm:w-32 w-14" />
    </div>
    <!-- GHOST -->
    <div
      class="relative z-10 w-full max-w-screen-xl px-20 mx-auto sm:px-10 xl:px-0"
    >
      <img
        ref="Title"
        class="hidden mb-8 md:block"
        src="/img/text/cover_title.png"
      />
      <img
        ref="Title"
        class="block w-full mb-8 md:hidden"
        src="/img/text/cover_title@sm.png"
      />
      <div
        class="flex flex-col w-full sm:items-center sm:justify-between sm:flex-row"
      >
        <div class="mb-5 overflow-hidden sm:mb-0">
          <div
            ref="SubTitle"
            class="px-10 py-3 text-xl text-center bg-white sm:py-4 sm:text-3xl text-primary_purple font-pixel"
          >
            <h2 class="font-pixel">互動式網頁設計</h2>
          </div>
        </div>

        <div class="flex items-start overflow-hidden text-white">
          <div class="mr-10 text-center count_box">
            <p class="font-pixel">個人組</p>
            <p class="text-2xl font-black font-pixel">973</p>
          </div>
          <div class="text-center count_box">
            <p class="font-pixel">團體組</p>
            <p class="text-2xl font-black font-pixel">39</p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="absolute z-0 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-40"
    >
      <div class="flex w-full">
        <span
          :style="`opacity:${opacity_list[0][item - 1]}`"
          class="w-[120px] h-[120px] bg-primary_purple blcok bg_square"
          v-for="item in 12"
          :key="`top_line_${item}`"
        ></span>
      </div>
      <div class="flex w-full">
        <span
          :style="`opacity:${opacity_list[1][item - 1]}`"
          class="w-[120px] h-[120px] bg-primary_purple blcok bg_square"
          v-for="item in 12"
          :key="`middle_line_${item}`"
        ></span>
      </div>
      <div class="flex w-full">
        <span
          :style="`opacity:${opacity_list[2][item - 1]}`"
          class="w-[120px] h-[120px] bg-primary_purple blcok bg_square"
          v-for="item in 12"
          :key="`bottom_line_${item}`"
        ></span>
      </div>
    </div>
  </section>
</template>

<script>
import MainTitleMarquee from '@/components/MainTitle/Marquee.vue';
import { gsap } from '@/gsap/gsap_loader';
export default {
  name: 'MainCover',
  components: {
    MainTitleMarquee,
  },
  data() {
    return {
      opacity_list: [
        [0, 0, 0.4, 0.2, 0, 0, 0.4, 0.2, 0, 0, 0.4, 0],
        [0, 0.3, 0, 0.4, 0, 0.3, 0, 0.4, 0, 0.3, 0, 0.4],
        [0.1, 0, 0.4, 0, 0.1, 0, 0.4, 0, 0.2, 0.2, 0.4, 0],
      ],
    };
  },
  mounted() {
    const count_box = this.$refs.MainContent.querySelectorAll('.count_box');
    const bg_square = this.$refs.MainContent.querySelectorAll('.bg_square');
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: this.$refs.MainContent,
      },
    });

    bg_square.forEach((item) => {
      timeline.from(
        item,
        {
          opacity: 0,
          delay: gsap.utils.random(0.1, 0.6),
          duration: 0.6,
        },
        'first'
      );
    });

    timeline
      .fromTo(
        this.$refs.Title,
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.inOut(4)',
        },
        'second'
      )
      .fromTo(
        this.$refs.SubTitle,
        {
          y: '105%',
        },
        {
          y: '0%',
          duration: 0.8,
          ease: 'back.inOut(4)',
          delay: 0.2,
        },
        'other'
      )
      .fromTo(
        count_box,
        {
          y: '105%',
        },
        {
          y: '0%',
          duration: 0.8,
          ease: 'back.inOut(4)',
          stagger: 0.1,
          delay: 0.2,
        },
        'other'
      )
      .from(
        this.$refs.TopGhost,
        {
          y: '-105%',
          ease: 'back.inOut(4)',
          delay: 0.4,
        },
        'other'
      )
      .from(
        this.$refs.LeftGhost,
        {
          y: '105%',
          duration: 1,
          ease: 'back.inOut(2)',
          delay: 0.4,
        },
        'other'
      )
      .from(
        this.$refs.RightGhost,
        {
          y: '105%',
          duration: 1,
          ease: 'back.inOut(2)',
          delay: 0.4,
        },
        'other'
      );
  },
};
</script>
