<template>
  <div
    ref="MainContent"
    class="fixed top-0 bottom-0 z-50 w-screen overflow-hidden bg-black left-full"
  >
    <div
      data-loading-box
      class="absolute flex items-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    >
      <img
        data-left-el
        src="/2022_f2e_week1/img/pacman_yellow_open.svg"
        class="absolute w-10 transform -translate-x-20 -scale-x-100 -left-20"
      />
      <img
        data-left-el
        src="/2022_f2e_week1/img/character/ghost_blue.svg"
        class="absolute w-10 transform -translate-x-10 -left-10 -scale-x-100"
      />

      <img
        data-right-el
        src="/2022_f2e_week1/img/pacman_yellow_open.svg"
        class="absolute w-10 transform translate-x-20 -right-20"
      />
      <img
        data-right-el
        src="/2022_f2e_week1/img/character/ghost_blue.svg"
        class="absolute w-10 transform translate-x-10 -right-10"
      />
      <p class="text-2xl text-primary_yellow font-pixel">LOADING...</p>
    </div>
  </div>
</template>

<script>
import { image_loader } from '@/gsap/image_loaded';
export default {
  data() {
    return {
      image_loader: null,
    };
  },
  mounted() {
    this.image_loader = new image_loader(this.$refs.MainContent);
    this.image_loader.loadImage();
  },
};
</script>
