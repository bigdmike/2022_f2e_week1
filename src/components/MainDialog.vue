<template>
  <div class="relative px-6 py-10 bg-white sm:px-10 sm:py-12 md:py-20">
    <!-- <h2 class="text-center">Sign Up!</h2> -->
    <div
      class="text-xl leading-relaxed sm:leading-loose sm:text-3xl font-pixel"
      v-html="content"
    ></div>
    <div class="border-group">
      <div
        class="absolute left-0 right-0 flex items-start -top-2 whitespace-nowrap"
      >
        <span class="block w-full h-2 bg-black"></span>
        <div
          class="relative flex-1 px-5 transform -translate-y-3 sm:-translate-y-1/2 font-pixel"
        >
          <h3 class="relative z-10 w-full text-3xl sm:text-6xl font-pixel">
            {{ title }}
          </h3>
          <span
            class="text-[#FBBF00] sm:text-6xl text-3xl font-pixel absolute top-0 left-5 z-0 transform sm:translate-x-[4px] sm:translate-y-[4px] translate-x-[2px] translate-y-[2px]"
            >{{ title }}</span
          >
        </div>
        <span class="block w-full h-2 bg-black"></span>
      </div>
      <span class="absolute top-0 bottom-0 w-2 bg-black -left-2"></span>
      <span class="absolute top-0 bottom-0 w-2 bg-black -right-2"></span>
      <span class="absolute left-0 right-0 h-2 bg-black -bottom-2"></span>
      <div class="absolute w-6 -bottom-6">
        <div class="w-6 h-2 bg-white"></div>
        <div class="flex w-6 h-2">
          <span class="block w-2 h-2 bg-black"></span>
          <span class="block w-2 h-2 bg-white"></span>
          <span class="block w-2 h-2 bg-black"></span>
        </div>
        <div class="w-2 h-2 mx-auto bg-black"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainDialog',
  props: {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
  },
};
</script>
