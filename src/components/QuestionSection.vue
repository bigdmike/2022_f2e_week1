<template>
  <section ref="MainContent" class="relative w-full h-[500vh] bg-black">
    <div data-question-box class="absolute top-0 left-0 w-full h-screen">
      <div
        v-for="(item, item_index) in question_list"
        :key="item.title"
        data-question-line
        class="absolute inline-block left-1/2 top-1/2 whitespace-nowrap"
      >
        <div
          :class="
            item_index == 0
              ? '-translate-y-40 md:-translate-y-80'
              : item_index == 2
              ? 'translate-y-40 md:translate-y-80'
              : ''
          "
          class="relative transform"
        >
          <h3
            class="text-3xl text-white sm:text-5xl md:text-6xl lg:text-7xl font-pixel xl:text-8xl"
          >
            {{ item.title }}
          </h3>
          <img
            :src="item.image"
            :class="
              item_index == 1
                ? '-scale-x-100 -left-10 -translate-x-full'
                : ' -right-10 translate-x-full'
            "
            class="absolute h-full transform -translate-y-1/2 top-1/2"
          />
          <img
            src="/img/pacman_yellow_open.svg"
            :class="
              item_index == 1
                ? '-scale-x-100 -left-20 -translate-x-[200%]'
                : '-right-20 translate-x-[200%] '
            "
            class="absolute h-full transform -translate-y-1/2 top-1/2"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { question_section_animation } from '@/gsap/scroll/question_section';
export default {
  name: 'QuestionSection',
  data() {
    return {
      question_section_animation: null,
      question_list: [
        {
          title: '羨慕別人酷酷的網頁動畫',
          image: '/img/character/ghost_blue.svg',
        },
        {
          title: '動畫技能樹太雜無從下手',
          image: '/img/character/ghost_purple.svg',
        },
        {
          title: '滿足不了同事的許願',
          image: '/img/character/ghost_orange.svg',
        },
      ],
    };
  },
  mounted() {
    this.question_section_animation = new question_section_animation(
      this.$refs.MainContent
    );
    window.addEventListener('resize', () => {
      this.question_section_animation.setup();
    });
  },
};
</script>
