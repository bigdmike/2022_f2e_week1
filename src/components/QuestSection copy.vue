<template>
  <section
    data-scroll-zoom
    ref="MainContent"
    class="relative w-full h-screen overflow-hidden font-pixel"
  >
    <article
      v-for="(item, item_index) in quest_data"
      :key="`quest_${item_index}`"
      data-zoom-section
      :class="item_index % 2 == 0 ? 'justify-start' : 'justify-end'"
      class="absolute z-[13] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-screen-xl flex"
    >
      <div>
        <div class="flex items-end mb-10">
          <p class="mr-5 text-2xl font-black">{{ item.sub_title }}</p>
          <p class="text-3xl font-black">{{ item.sponsor }}</p>
        </div>
        <header class="mb-10">
          <h2 class="font-black text-7xl" v-html="item.title"></h2>
        </header>
        <p class="mb-5 text-3xl font-black" v-html="item.content"></p>
        <div>
          <a
            target="_blank"
            :href="item.link"
            class="inline-block px-5 py-2 text-lg font-bold bg-yellow-500"
            >查看關卡細節</a
          >
        </div>
      </div>
    </article>

    <QuestSectionBackground
      class="absolute top-0 left-0 right-0 bottom-0 z-[1] w-full h-screen"
    />
    <div class="absolute top-0 bottom-0 left-0 right-0 z-0 background"></div>
  </section>
</template>

<script>
import { gsap, ScrollTrigger } from '@/gsap/gsap_loader';
import QuestSectionBackground from '@/components/svg/QuestSectionBackground.vue';
export default {
  name: 'QuestSection',
  data() {
    return {
      quest_data: [
        {
          title: 'THE F2E<br />活動網站設計',
          sub_title: 'Week1',
          sponsor: '版塊設計',
          content: '視差滾動',
          link: '',
        },
        {
          title: '今晚我想來<br />點點簽',
          sub_title: 'Week2',
          sponsor: '凱鈿行動科技',
          content: 'Canvas',
          link: '',
        },
        {
          title: 'SCRUM<br />新手村',
          sub_title: 'Week3',
          sponsor: '泰坦科技',
          content: 'JS DRAGGABLE',
          link: '',
        },
      ],
    };
  },
  components: {
    QuestSectionBackground,
  },
  methods: {},
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const texts = this.$refs.MainContent.querySelectorAll('article');
    const background = this.$refs.MainContent.querySelectorAll('.background');
    let stack_list = [1, 2, 3];
    let color_list = ['yellow', 'purple', 'black'];

    texts.forEach((text, i) => {
      gsap.set(text, {
        scale: 1 / stack_list[i],
        opacity: 1 / stack_list[i],
      });
    });

    gsap.set(background, {
      backgroundColor: 'blue',
      fill: 'blue',
    });
    //top -500px
    //100vh

    //top -100vh+500px
    //300vh

    //top -300vh
    //400vh

    texts.forEach((text, i) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: this.$refs.MainContent,
          // start: () => 'top -' + window.innerHeight * i,
          start: () => 'top -' + window.innerHeight * (i + 1),
          end: () => '+=' + window.innerHeight,
          scrub: true,
          // markers: true,
          toggleActions: 'play none reverse none',
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        background,
        {
          backgroundColor: color_list[i],
          fill: color_list[i],
        },
        `animate_${i}`
      );

      texts.forEach((animate_text, animate_index) => {
        if (stack_list[animate_index] - i == 1) {
          tl.to(
            animate_text,
            {
              scale: 2,
              opacity: 0,
              zIndex: -1,
              x: `${animate_index % 2 == 0 ? '-' : ''}50%`,
            },
            `animate_${i}`
          );
        } else if (stack_list[animate_index] - i > 0) {
          tl.to(
            animate_text,
            {
              scale: 1 / (stack_list[animate_index] - i - 1),
              opacity: 1 / (stack_list[animate_index] - i - 1),
            },
            `animate_${i}`
          );
        }
      });
    });

    ScrollTrigger.create({
      trigger: this.$refs.MainContent,
      scrub: true,
      markers: true,
      pin: true,
      start: () => 'top top',
      end: () => '+=' + (texts.length + 1) * window.innerHeight,
      invalidateOnRefresh: true,
    });
  },
};
</script>
