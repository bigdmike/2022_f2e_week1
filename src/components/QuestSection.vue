<template>
  <section
    id="QuestSection"
    ref="MainContent"
    class="w-full h-[1000vh] font-pixel relative overflow-hidden"
  >
    <div
      data-background-box
      class="absolute top-0 left-0 transform z-[1] w-full h-screen"
    >
      <img
        data-background-el
        v-for="item in quest_data.length + 2"
        :key="`bg_${item}`"
        src="/img/quest_background.svg"
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
        data-article
        v-for="(item, item_index) in quest_data"
        :key="`quest_${item_index}`"
        :style="`z-index:${quest_data.length - item_index}`"
        class="absolute top-0 left-0 flex items-center justify-center w-full h-screen overflow-hidden bg-transparent"
      >
        <div
          :class="item_index % 2 == 0 ? 'justify-start' : 'justify-end'"
          class="flex items-center w-full max-w-screen-md px-10 mx-auto xl:max-w-screen-xl md:px-0"
        >
          <div>
            <div class="flex items-end mb-10">
              <p
                :class="item_index == 1 ? 'text-white' : ''"
                class="mr-5 text-2xl font-black font-pixel"
              >
                {{ item.sub_title }}
              </p>
              <div class="relative px-6 py-3 bg-white md:py-4">
                <span
                  class="absolute left-0 right-0 h-1 bg-black -top-1"
                ></span>
                <div class="absolute left-0 right-0 flex -bottom-3">
                  <span class="block w-5 h-1 bg-black"></span>
                  <div class="block w-3 bg-transparent">
                    <div class="w-3 h-1 bg-white"></div>
                    <div class="flex items-stretch w-3 h-1">
                      <span class="w-1 h-1 bg-black"></span>
                      <span class="w-1 h-1 bg-white"></span>
                      <span class="w-1 h-1 bg-black"></span>
                    </div>
                    <div class="flex items-stretch w-3 h-1">
                      <span class="w-1 h-1 bg-transparent"></span>
                      <span class="w-1 h-1 bg-black"></span>
                      <span class="w-1 h-1 bg-transparent"></span>
                    </div>
                  </div>
                  <span class="flex-1 block h-1 bg-black"></span>
                </div>
                <span
                  class="absolute top-0 bottom-0 w-1 bg-black -left-1"
                ></span>
                <span
                  class="absolute top-0 bottom-0 w-1 bg-black -right-1"
                ></span>
                <p
                  class="text-2xl font-black font-pixel"
                  v-html="item.sponsor"
                ></p>
              </div>
            </div>
            <header class="relative mb-10">
              <h2
                class="relative z-10 text-5xl font-black leading-tight sm:text-7xl font-pixel text-primary_yellow"
                v-html="item.title"
              ></h2>
              <span
                class="absolute top-0 left-0 z-0 text-5xl font-black leading-tight transform translate-x-1 translate-y-1 sm:text-7xl font-pixel"
                v-html="item.title"
              ></span>
            </header>
            <p
              :class="item_index == 1 ? 'text-white' : ''"
              class="mb-5 text-2xl font-black sm:text-3xl"
              v-html="item.content"
            ></p>
            <div>
              <a
                target="_blank"
                :href="item.link"
                class="inline-block px-5 py-2 text-sm font-bold bg-yellow-500 md:text-lg sm:text-base"
                >查看關卡細節</a
              >
            </div>
          </div>
        </div>
      </article>
      <article data-article class="absolute z-0 opacity-0"></article>
      <article data-article class="absolute z-0 opacity-0"></article>
    </div>
  </section>
</template>

<script>
import { quest_section_animation } from '@/gsap/scroll/quest_section';
export default {
  name: 'QuestSection',
  data() {
    return {
      quest_data: [
        {
          title: 'TheF2E<br />活動網站設計',
          sub_title: 'Week1',
          sponsor: '版塊設計',
          content: '視差滾動',
          link: '',
          background_color: '#52C4CC',
        },
        {
          title: '今晚我想來<br />點點簽',
          sub_title: 'Week2',
          sponsor: '凱鈿<br class="block sm:hidden"/>行動科技',
          content: 'Canvas',
          link: '',
          background_color: '#6633FF',
        },
        {
          title: 'SCRUM<br />新手村',
          sub_title: 'Week3',
          sponsor: '新加坡商<br class="block sm:hidden"/>鈦坦科技',
          content: 'JS DRAGGABLE',
          link: '',
          background_color: '#FF7A00',
        },
      ],
      quest_section_animation: null,
    };
  },
  mounted() {
    this.quest_section_animation = new quest_section_animation(
      this.$refs.MainContent
    );
    window.addEventListener('resize', () => {
      this.quest_section_animation.setup();
    });
  },
};
</script>
