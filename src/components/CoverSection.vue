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
      class="absolute -bottom-10 -right-10 transform -rotate-[20deg] -scale-x-100 w-60 z-10"
    />
    <img
      ref="TopGhost"
      src="/img/character/ghost_blue.svg"
      class="absolute -top-20 left-80 transform -rotate-[200deg] w-60 z-10"
    />
    <div
      ref="LeftGhost"
      class="absolute z-10 flex items-center -bottom-8 left-36"
    >
      <img src="/img/character/ghost_purple.svg" class="w-32 mr-5" />
      <img src="/img/character/ghost_red.svg" class="w-32" />
    </div>
    <!-- GHOST -->
    <div class="relative z-10">
      <img ref="Title" class="block mb-8" src="/img/text/cover_title.png" />
      <div class="flex items-center justify-between w-full">
        <div class="overflow-hidden">
          <div
            ref="SubTitle"
            class="px-10 py-4 text-3xl bg-white text-primary_purple font-pixel"
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
