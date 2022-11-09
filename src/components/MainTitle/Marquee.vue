<template>
  <div ref="MainContent" class="whitespace-nowrap">
    <span
      v-for="item in 100"
      :key="`top_marquee_${item}`"
      class="text-4xl tracking-normal font-pixel text-primary_purple text-opacity-40"
      >FRONTEND UI DESIGN</span
    >
  </div>
</template>
<script>
import { gsap } from '@/gsap/gsap_loader';
export default {
  name: 'MainTitleMarquee',
  props: {
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    let timeline = gsap.timeline();
    timeline.fromTo(
      this.$refs.MainContent,
      {
        x: this.reverse ? '-50%' : '0%',
      },
      {
        x: this.reverse ? '0%' : '-50%',
        repeat: -1,
        duration: 800,
      }
    );
    // translateX(-50%)
  },
};
</script>
