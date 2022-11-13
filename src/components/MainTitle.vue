<template>
  <section
    ref="MainContent"
    class="w-full h-[200vh] font-pixel relative overflow-hidden"
  >
    <div
      data-title
      class="absolute z-10 flex items-center justify-center w-full px-16 transform -translate-x-1/2 left-1/2 top-12"
    >
      <img src="/2022_f2e_week1/img/title.svg" class="" />
    </div>

    <div
      data-background-box
      class="absolute top-0 left-0 transform z-[1] w-full h-screen"
    >
      <img
        data-background-el
        v-for="item in 4"
        :key="`bg_${item}`"
        src="/2022_f2e_week1/img/title_background.svg"
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

    <div data-article-box class="relative z-20 w-full h-screen">
      <article
        class="relative flex items-center justify-center w-full h-screen px-8 md:px-20 sm:px-16"
      >
        <MainTitleMarquee class="absolute left-0 top-5" />
        <MainTitleMarquee class="absolute left-0 bottom-5" :reverse="true" />

        <div
          class="relative z-10 flex items-center justify-center w-full py-12 sm:px-10 md:w-auto lg:px-20 lg:py-14"
        >
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
            <span class="w-10 h-2 bg-white sm:w-48"></span>
          </span>
          <span
            class="absolute top-0 bottom-0 w-2 h-full bg-white -left-2"
          ></span>
          <span
            class="absolute top-0 bottom-0 w-2 h-full bg-white -right-2"
          ></span>
          <img
            src="/2022_f2e_week1/img/character/cat.svg"
            class="absolute top-0 left-0 w-24 transform -translate-y-full sm:w-32 md:left-40 sm:left-20"
          />
          <img
            src="/2022_f2e_week1/img/character/seal.svg"
            class="absolute top-0 right-0 w-32 transform -translate-y-full sm:w-40 md:w-44 md:right-20 sm:right-10"
          />

          <div class="items-center justify-center hidden md:flex">
            <img
              src="/2022_f2e_week1/img/pacman_yellow_open.svg"
              class="w-24 mr-2"
            />
            <div class="relative -mt-4">
              <h2
                class="relative z-10 leading-normal text-white font-pixel text-8xl"
              >
                互動式網頁設計
              </h2>
              <span
                class="absolute top-0 left-0 z-0 leading-normal transform translate-x-1 translate-y-1 text-primary_purple font-pixel text-8xl"
                >互動式網頁設計</span
              >
            </div>
          </div>
          <div class="block md:hidden">
            <div class="flex items-center">
              <img
                src="/2022_f2e_week1/img/pacman_yellow_open.svg"
                class="w-20 mr-2 sm:w-24"
              />
              <div class="relative mb-4 sm:-mt-4 sm:mb-0">
                <h2
                  class="relative z-10 text-6xl leading-normal text-white font-pixel sm:text-8xl"
                >
                  互動式
                </h2>
                <span
                  class="absolute top-0 left-0 z-0 text-6xl leading-normal transform translate-x-1 translate-y-1 text-primary_purple font-pixel sm:text-8xl"
                  >互動式</span
                >
              </div>
            </div>
            <div class="relative -mt-4">
              <h2
                class="relative z-10 leading-normal text-white font-pixel sm:text-8xl text-7xl"
              >
                網頁設計
              </h2>
              <span
                class="absolute top-0 left-0 z-0 leading-normal transform translate-x-1 translate-y-1 text-primary_purple font-pixel sm:text-8xl text-7xl"
                >網頁設計</span
              >
            </div>
          </div>
        </div>

        <div
          class="absolute z-0 w-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        >
          <div class="flex w-full">
            <span
              :style="`opacity:${opacity_list[0][item - 1]}`"
              class="md:w-[120px] w-[90px] md:h-[120px] h-[90px] bg-primary_purple blcok flex-shrink-0"
              v-for="item in 12"
              :key="`top_line_${item}`"
            ></span>
          </div>
          <div class="flex w-full">
            <span
              :style="`opacity:${opacity_list[1][item - 1]}`"
              class="md:w-[120px] w-[90px] md:h-[120px] h-[90px] bg-primary_purple blcok flex-shrink-0"
              v-for="item in 12"
              :key="`middle_line_${item}`"
            ></span>
          </div>
          <div class="flex w-full">
            <span
              :style="`opacity:${opacity_list[2][item - 1]}`"
              class="md:w-[120px] w-[90px] md:h-[120px] h-[90px] bg-primary_purple blcok flex-shrink-0"
              v-for="item in 12"
              :key="`bottom_line_${item}`"
            ></span>
          </div>
        </div>

        <div
          class="absolute flex items-end w-full max-w-screen-lg transform -translate-x-1/2 left-1/2 bottom-20"
        >
          <img
            class="ml-10 mr-10 sm:mr-20 sm:ml-20 sm:w-20 w-11 md:mr-24 md:w-24 md:ml-0"
            src="/2022_f2e_week1/img/character/ghost_blue.svg"
          />
          <img
            class="mr-2 sm:mr-4 sm:w-20 w-11 md:w-24"
            src="/2022_f2e_week1/img/character/ghost_purple.svg"
          />
          <img
            class="mr-10 sm:mr-20 sm:w-20 w-11 md:mr-24 md:w-24"
            src="/2022_f2e_week1/img/character/ghost_red.svg"
          />
          <img
            class="sm:w-20 w-11 md:w-24"
            src="/2022_f2e_week1/img/character/ghost_orange.svg"
          />
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import MainTitleMarquee from '@/components/MainTitle/Marquee.vue';
import { main_title_section_animation } from '@/gsap/scroll/main_title_section';
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
      main_title_section_animation: null,
    };
  },
  mounted() {
    this.main_title_section_animation = new main_title_section_animation(
      this.$refs.MainContent
    );
    window.addEventListener('resize', () => {
      this.main_title_section_animation.setup();
    });
  },
};
</script>
