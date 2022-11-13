<template>
  <section
    ref="MainContent"
    class="relative w-[300vw] flex flex-nowrap h-screen bg-black"
  >
    <div
      data-progress-box
      class="absolute left-0 z-10 w-screen px-10 transform -translate-y-1/2 progress top-1/2 md:px-0"
    >
      <ol
        class="relative flex items-center justify-center w-full max-w-screen-lg mx-auto"
      >
        <li
          data-pacman
          class="absolute bottom-0 left-0 z-10 transform -translate-x-1/2 translate-y-1/2 pacman"
        >
          <div class="relative">
            <img
              :class="progress >= 70 ? 'opacity-0' : 'opacity-100'"
              class="relative z-10 w-10 sm:w-auto"
              src="@/assets/img/pacman_yellow_open.svg"
            />
            <img
              :class="progress >= 70 ? 'opacity-100' : 'opacity-0'"
              class="absolute top-0 left-0 z-10 w-10 sm:w-auto"
              src="@/assets/img/pacman_black_open.svg"
            />
          </div>
        </li>
        <li
          v-for="(item, item_index) in section_data"
          :key="item.title"
          class="relative z-0 w-1/5 h-5 px-6 text-center sm:h-auto"
        >
          <p
            data-progress-title
            :class="progress >= 70 ? 'text-black' : 'text-yellow-400'"
            class="absolute block mb-12 text-xs transition-colors duration-300 transform -translate-x-1/2 -translate-y-8 sm:text-base sm:relative sm:left-0 left-1/2 sm:-translate-x-0 sm:translate-y-0"
          >
            <span
              class="block transition-all duration-200 font-pixel"
              :class="
                progress == item_index * 20 + 20
                  ? 'opacity-100'
                  : 'sm:opacity-100 opacity-0'
              "
              >{{ item.title }}</span
            >
          </p>
          <span
            v-show="progress < item_index * 20 + 10"
            :class="progress >= 70 ? 'bg-black' : 'bg-yellow-400'"
            class="inline-block w-2 h-2"
          ></span>
        </li>
      </ol>
    </div>
    <article
      data-article
      class="flex-shrink-0 w-screen h-screen bg-black"
    ></article>
    <article
      data-article
      v-for="(item, item_index) in section_data"
      :key="`section_${item_index}`"
      :style="`background-color:${item.background_color}`"
      :class="item.type != 'text_image' ? 'pt-44 md:pt-0' : ''"
      class="flex items-center justify-center flex-shrink-0 w-screen h-screen"
    >
      <div
        v-if="item.type == 'text_image'"
        :class="
          item_index % 2 != 0
            ? 'md:flex-row-reverse sm:justify-start justify-center'
            : 'sm:justify-end justify-center'
        "
        class="flex flex-wrap items-center w-full max-w-screen-xl -mx-10 md:justify-center"
      >
        <div class="w-full px-10 mb-20 md:w-3/5 dialog_box sm:mb-0">
          <MainDialog
            class="w-full max-w-[588px] md:mx-0 mx-auto"
            :title="item.title"
            :content="item.content"
          />
        </div>
        <!--  transform translate-y-1/2 -->
        <div class="sm:w-[432px] w-[330px] px-10 md:w-2/5 image_box">
          <img class="block w-full" :src="item.image" />
        </div>
      </div>

      <div
        v-else
        class="flex flex-col items-start justify-center w-full max-w-screen-xl -mx-10 md:flex-row"
      >
        <div
          class="w-full px-10 mb-20 md:w-1/2 dialog_box md:mb-0"
          v-for="content in item.content"
          :key="content.title"
        >
          <MainDialog
            class="w-full md:max-w-[588px]"
            :title="content.title"
            :content="content.content"
          />
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import { timeline_section_animation } from '@/gsap/scroll/timeline_section';
import MainDialog from '@/components/MainDialog.vue';
export default {
  name: 'TimelineSection',
  components: {
    MainDialog,
  },
  data() {
    return {
      section_data: [
        {
          background_color: '#52C4CC',
          title: 'SignUp!',
          type: 'text_image',
          content: '個別組別開賽<br/>UI/團體 10/31(一)<br/>前端 11/07 (一)',
          image: '@/assets/img/timeline_section_signup.png',
        },
        {
          background_color: '#6633FF',
          title: 'Start!',
          type: 'text_image',
          content: '各組別開賽<br/>UI/團體 10/31(一)<br/>前端 11/07 (一)',
          image: '@/assets/img/timeline_section_start.png',
        },
        {
          background_color: '#FF7A00',
          title: 'Upload!',
          type: 'text_image',
          content: '登陸作品<br/>10/31(一) 12:00 -<br/>11/28 (一) 12:00',
          image: '@/assets/img/timeline_section_upload.png',
        },
        {
          background_color: '#FBBF00',
          title: 'Stream',
          type: 'text_image',
          content: '線上直播<br/>11/3 - 11/24<br/> (每週四)',
          image: '@/assets/img/timeline_section_stream.png',
        },
        {
          background_color: '#FBBF00',
          title: 'Awards',
          type: 'text_text',
          content: [
            {
              title: '評審機制',
              content:
                '<div class="text-base font-bold sm:text-2xl font-noto_sans">初選：將由六角學院前端/UI評審進行第一波篩選，並於<span class="text-purple-500">12/5(五)公布初選佳作名單</span>。<br/><br/>決選：由三大企業針對該企業主題進行入圍獎最後篩選，並於<span class="text-purple-500">12/23(五)公布企業得獎名單</span>。</div>',
            },
            {
              title: '獎項',
              content:
                '<div class="font-bold font-noto_sans"><p class="text-base font-bold text-purple-500 sm:text-2xl">初選佳作 數位獎狀 共60位</p><p class="mb-5 text-sm sm:text-base">每週主題個人組10位、團體組10組</p><p class="text-base font-bold text-purple-500 sm:text-2xl">個人企業獎 NT$ 3,000 /位 共6位</p><p class="mb-5 text-sm sm:text-base">每週主題各2名，設計1位、前端1位</p><p class="text-base font-bold text-purple-500 sm:text-2xl">團體企業獎 NT$ 10,000 /組 共3組</p><p class="mb-5 text-sm sm:text-base">每週主題各 1 組</p><p class="text-base font-bold sm:text-2xl">以上皆提供完賽數位獎狀</p></div>',
            },
          ],
        },
      ],
      progress: 0,
      timeline_section_animation: null,
    };
  },
  watch: {
    'timeline_section_animation.progress'() {
      this.progress = this.timeline_section_animation.progress;
    },
  },
  mounted() {
    this.timeline_section_animation = new timeline_section_animation(
      this.$refs.MainContent
    );
    window.addEventListener('resize', () => {
      this.timeline_section_animation.setup();
    });
  },
};
</script>
