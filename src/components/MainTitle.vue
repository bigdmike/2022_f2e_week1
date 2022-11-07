<template>
  <section
    ref="MainContent"
    class="w-full h-[800vh] font-pixel relative overflow-hidden"
  >
    <div
      ref="title"
      class="absolute z-10 transform -translate-x-1/2 left-1/2 top-12"
    >
      <img src="/img/title.svg" class="" />
    </div>

    <div
      ref="BackgroundImage"
      class="absolute top-0 left-0 transform z-[1] w-full h-screen"
    >
      <img
        v-for="item in 4"
        :key="`bg_${item}`"
        src="/img/title_background.svg"
        :class="
          item == 1
            ? ''
            : item == 2
            ? 'scale-[.25] opacity-1'
            : ' scale-[.1] opacity-0'
        "
        class="absolute top-0 left-0 transform z-[1] w-full h-screen origin-center bg_el"
      />
    </div>

    <div ref="AriticleBox" class="relative z-20 w-full h-screen">
      <article
        class="relative flex items-center justify-center w-full h-screen"
      >
        <MainTitleMarquee class="absolute left-0 top-5" />
        <MainTitleMarquee class="absolute left-0 bottom-5" />

        <div class="relative z-10 flex items-center justify-center px-20 py-14">
          <span
            class="absolute left-0 right-0 w-full h-2 bg-white -top-2"
          ></span>
          <span
            class="absolute left-0 right-0 flex items-stretch w-full h-2 -bottom-2"
          >
            <span class="flex-1 h-2 bg-white"></span>
            <span class="relative w-6 pt-2 text-center bg-transparent">
              <div class="flex justify-between">
                <span class="w-2 h-2 bg-white"></span>
                <span class="w-2 h-2 bg-white"></span>
              </div>
              <span class="block w-2 h-2 mx-auto bg-white"></span>
            </span>
            <span class="w-48 h-2 bg-white"></span>
          </span>
          <span
            class="absolute top-0 bottom-0 w-2 h-full bg-white -left-2"
          ></span>
          <span
            class="absolute top-0 bottom-0 w-2 h-full bg-white -right-2"
          ></span>
          <img
            src="/img/character/cat.svg"
            class="absolute top-0 w-32 transform -translate-y-full left-40"
          />
          <img
            src="/img/character/seal.svg"
            class="absolute top-0 transform -translate-y-full w-44 right-20"
          />

          <img src="/img/pacman_yellow_open.svg" class="w-24 mr-2" />
          <div class="relative -mt-4">
            <h2
              class="relative z-10 leading-none text-white font-pixel text-8xl"
            >
              互動式網頁設計
            </h2>
            <span
              class="absolute top-0 left-0 z-0 transform translate-x-1 translate-y-1 text-primary_purple font-pixel text-8xl"
              >互動式網頁設計</span
            >
          </div>
        </div>

        <div
          class="absolute z-0 w-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        >
          <div class="flex w-full">
            <span
              :style="`opacity:${opacity_list[0][item - 1]}`"
              class="w-[120px] h-[120px] bg-primary_purple blcok"
              v-for="item in 12"
              :key="`top_line_${item}`"
            ></span>
          </div>
          <div class="flex w-full">
            <span
              :style="`opacity:${opacity_list[1][item - 1]}`"
              class="w-[120px] h-[120px] bg-primary_purple blcok"
              v-for="item in 12"
              :key="`middle_line_${item}`"
            ></span>
          </div>
          <div class="flex w-full">
            <span
              :style="`opacity:${opacity_list[2][item - 1]}`"
              class="w-[120px] h-[120px] bg-primary_purple blcok"
              v-for="item in 12"
              :key="`bottom_line_${item}`"
            ></span>
          </div>
        </div>

        <div
          class="absolute flex items-end w-full max-w-screen-lg transform -translate-x-1/2 left-1/2 bottom-20"
        >
          <img class="w-24 mr-24" src="/img/character/ghost_blue.svg" />
          <img class="w-24 mr-4" src="/img/character/ghost_purple.svg" />
          <img class="w-24 mr-24" src="/img/character/ghost_red.svg" />
          <img class="w-24" src="/img/character/ghost_orange.svg" />
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import { gsap } from '@/gsap/gsap_loader';
import MainTitleMarquee from '@/components/MainTitle/Marquee.vue';
export default {
  name: 'QuestSection',
  components: {
    MainTitleMarquee,
  },
  data() {
    return {
      opacity_list: [
        [0, 0, 0.4, 0.2, 0, 0, 0.4, 0.2, 0, 0, 0.6, 0],
        [0, 0.4, 0, 0.4, 0, 0.2, 0, 0.4, 0, 0.4, 0, 0.6],
        [0.2, 0, 0.4, 0, 0.2, 0, 0.4, 0, 0.1, 0.2, 0.6, 0],
      ],
    };
  },
  mounted() {
    let bg_el = this.$refs.BackgroundImage.querySelectorAll('.bg_el');
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.$refs.MainContent,
        start: '0 top',
        end: window.innerHeight * 2 + ' bottom',
        scrub: true,
        pin: this.$refs.title,
      },
    });

    tl.fromTo(
      this.$refs.title,
      {
        scale: 1,
        opacity: 1,
      },
      {
        scale: 2,
        opacity: 0,
      },
      'same'
    );
    tl.fromTo(
      this.$refs.AriticleBox,
      {
        scale: 0.2,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
      },
      'same'
    );
    tl.to(
      bg_el[0],
      {
        scale: 4,
      },
      'same'
    );
    tl.to(
      bg_el[1],
      {
        scale: 1,
      },
      'same'
    );

    gsap.timeline({
      scrollTrigger: {
        trigger: this.$refs.MainContent,
        start: window.innerHeight * 2 + ' bottom',
        end: window.innerHeight * 3 + ' top',
        scrub: true,
      },
    });

    let leave_tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.$refs.MainContent,
        start: window.innerHeight * 3 + ' bottom',
        end: window.innerHeight * 4 + ' top',
        scrub: true,
      },
    });

    leave_tl.fromTo(
      this.$refs.AriticleBox,
      {
        opacity: 1,
        scale: 1,
      },
      {
        opacity: 0,
        scale: 3,
      },
      'same'
    );
    leave_tl.to(
      this.$refs.MainContent,
      {
        backgroundColor: '#52C4CC',
      },
      'same'
    );
    leave_tl.to(
      this.$refs.BackgroundImage,
      {
        opacity: 0,
      },
      'same'
    );

    gsap.to(this.$refs.AriticleBox, {
      scrollTrigger: {
        trigger: this.$refs.MainContent,
        start: 'top top',
        end: 'bottom bottom',
        pin: this.$refs.AriticleBox,
      },
    });

    gsap.to(this.$refs.BackgroundImage, {
      scrollTrigger: {
        trigger: this.$refs.MainContent,
        start: 'top top',
        end: 'bottom bottom',
        pin: this.$refs.BackgroundImage,
      },
    });
    gsap.to(this.$refs.MainContent, {
      scrollTrigger: {
        trigger: this.$refs.MainContent,
        start: 'top top',
        end: window.innerHeight * 4 + ' top',
        pin: this.$refs.MainContent,
      },
    });
  },
};
</script>
