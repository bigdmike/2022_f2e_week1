<template>
  <div
    ref="MainContent"
    class="fixed top-0 bottom-0 z-40 flex items-center justify-center w-screen left-full bg-primary_yellow"
  >
    <button
      @click="$emit('close-action', false)"
      data-close-btn
      class="absolute px-2 py-1 text-2xl bg-black font-pixel top-8 right-10 text-primary_yellow"
    >
      X
    </button>
    <ol data-menu-list>
      <li v-for="item in menu_list" :key="item.title">
        <a
          @click="Close"
          :href="item.link"
          :target="item.target"
          class="block py-4 text-2xl font-pixel"
          >{{ item.title }}</a
        >
      </li>
    </ol>
  </div>
</template>

<script>
import { gsap } from '@/gsap/gsap_loader';
export default {
  name: 'MainMenu',
  props: {
    status: {
      require: true,
      type: Boolean,
    },
  },
  data() {
    return {
      timeline: null,
      menu_list: [
        {
          title: '關卡資訊',
          link: '#QuestSection',
          target: '',
        },
        {
          title: '作品列表',
          link: 'https://2022.thef2e.com/works',
          target: '_blank',
        },
        {
          title: '攻略資源',
          link: 'https://hackmd.io/ofJD4K7iSI65V19zxC7d0w',
          target: '_blank',
        },
        {
          title: '求職專區',
          link: 'https://2022.thef2e.com/jobs',
          target: '_blank',
        },
      ],
    };
  },
  methods: {
    Open() {
      const menu_list =
        this.$refs.MainContent.querySelector('[data-menu-list]');
      const menu_list_item = menu_list.querySelectorAll('li');
      const close_btn =
        this.$refs.MainContent.querySelector('[data-close-btn]');
      this.timeline != null ? this.timeline.kill() : '';
      this.timeline = gsap.timeline();
      this.timeline
        .set(this.$refs.MainContent, {
          x: '-100%',
        })
        .fromTo(
          this.$refs.MainContent,
          {
            backgroundColor: 'transparent',
          },
          {
            backgroundColor: 'rgb(251,191,0)',
          }
        )
        .fromTo(
          menu_list_item,
          {
            opacity: 0,
            y: '20px',
          },
          {
            opacity: 1,
            y: '0px',
            stagger: 0.1,
          },
          'same'
        )
        .fromTo(
          close_btn,
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
          'same'
        );
    },
    Close() {
      this.timeline != null ? this.timeline.reverse() : '';
    },
  },
  watch: {
    status() {
      if (this.status) {
        this.Open();
      } else {
        this.Close();
      }
    },
  },
};
</script>
