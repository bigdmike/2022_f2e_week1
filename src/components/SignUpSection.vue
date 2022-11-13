<template>
  <section
    ref="MainContent"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    class="relative w-full overflow-hidden bg-black"
  >
    <a
      href="https://2022.thef2e.com/"
      target="_blank"
      class="relative flex items-center justify-center w-full h-full md:py-40 py-60"
    >
      <div class="relative z-20">
        <div class="relative mb-5 sm:mb-10">
          <h4
            data-text-body
            class="relative z-10 tracking-tighter md:text-9xl sm:text-[80px] text-[50px] text-primary_yellow font-pixel"
          >
            <span class="inline-block mr-2 sm:mr-5 font-pixel md:mr-0"
              >Sign</span
            ><span class="inline-block font-pixel">Up</span>
          </h4>
          <span
            data-text-shadow
            class="absolute top-0 left-0 tracking-tighter transform translate-x-1 translate-y-1 md:text-9xl sm:text-[80px] text-[50px] text-primary_purple"
            ><span class="inline-block mr-2 sm:mr-5 font-pixel md:mr-0"
              >Sign</span
            ><span class="inline-block font-pixel">Up</span></span
          >
        </div>
        <p
          data-content
          class="text-3xl sm:text-5xl md:text-6xl font-pixel text-primary_yellow"
        >
          立即報名!
        </p>
      </div>

      <!-- BG CIRCLE -->
      <div
        data-background
        class="absolute w-full h-full scale-[0%] transform -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-primary_yellow top-1/2 left-1/2"
      ></div>
      <!-- BG CIRCLE -->

      <!-- CENTER SEAL -->
      <div
        class="absolute z-10 pt-20 overflow-hidden transform translate-x-10 -translate-y-10 md:translate-x-44 top-1/2 left-1/2"
      >
        <img
          data-seal
          src="@/assets/img/character/seal.svg"
          class="md:w-44 sm:w-36 w-28 transform translate-y-[105%]"
        />
      </div>
      <!-- CENTER SEAL -->

      <!-- Right GHOST -->
      <img
        data-ghost-right
        src="@/assets/img/character/ghost_red.svg"
        class="absolute right-0 transform translate-x-[85%] md:translate-y-0 sm:-translate-y-1/2 -scale-x-100 -rotate-[15deg] md:w-36 sm:w-24 w-20 md:top-auto sm:top-1/2 sm:bottom-auto bottom-12 md:bottom-24 z-10"
      />
      <!-- Right GHOST -->

      <!-- TOP GHOST -->
      <img
        data-ghost-top
        src="@/assets/img/character/ghost_orange.svg"
        class="absolute left-1/2 transform rotate-[165deg] -translate-x-1/2 -translate-y-[85%] md:w-36 sm:w-24 w-20 top-0 z-10"
      />
      <!-- TOP GHOST -->

      <!-- CAT -->
      <img
        data-cat
        src="@/assets/img/character/cat.svg"
        class="absolute left-0 z-10 md:w-40 sm:w-32 w-[90px] transform rotate-45 -translate-x-[90%] -translate-y-[40%] sm:-translate-y-1/2 top-1/2"
      />
      <!-- CAT -->

      <!-- BOTTOM GHOST -->
      <div
        data-ghost-bottom
        class="absolute z-10 flex items-center transform translate-y-[50%] -bottom-5 sm:-bottom-8 md:-bottom-10 md:left-80 left-7 sm:left-32"
      >
        <img
          src="@/assets/img/character/ghost_blue.svg"
          class="w-20 mr-2 sm:mr-5 sm:w-24 md:w-32"
        />
        <img
          src="@/assets/img/character/ghost_purple.svg"
          class="w-20 sm:w-24 md:w-32"
        />
      </div>
      <!-- BOTTOM GHOST -->
    </a>
  </section>
</template>

<script>
import { signup_section_animation } from '@/gsap/signup_section';
export default {
  name: 'SignUpSection',
  data() {
    return {
      hover: false,
      signup_section_animation: null,
    };
  },
  methods: {
    Open() {
      this.signup_section_animation.open();
    },
    Close() {
      this.signup_section_animation.close();
    },
  },
  watch: {
    hover() {
      this.hover ? this.Open() : this.Close();
    },
  },
  mounted() {
    this.signup_section_animation = new signup_section_animation(
      this.$refs.MainContent
    );
  },
};
</script>
