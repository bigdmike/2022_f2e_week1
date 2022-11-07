<template>
  <div class="relative bg-white px-10 py-20">
    <!-- <h2 class="text-center">Sign Up!</h2> -->
    <div class="font-pixel text-3xl leading-loose" v-html="content"></div>
    <div class="border-group">
      <div
        class="absolute -top-2 right-0 left-0 whitespace-nowrap flex items-start"
      >
        <span class="h-2 bg-black block w-full"></span>
        <div class="flex-1 px-5 font-pixel transform -translate-y-1/2 relative">
          <h3 class="w-full text-6xl relative z-10">
            {{ title }}
          </h3>
          <span
            class="text-[#FBBF00] text-6xl absolute top-0 left-5 z-0 transform translate-x-[4px] translate-y-[4px]"
            >{{ title }}</span
          >
        </div>
        <span class="h-2 bg-black block w-full"></span>
      </div>
      <span class="absolute top-0 bottom-0 -left-2 w-2 bg-black"></span>
      <span class="absolute top-0 bottom-0 -right-2 w-2 bg-black"></span>
      <span class="absolute -bottom-2 left-0 right-0 h-2 bg-black"></span>
      <div class="absolute -bottom-6 w-6">
        <div class="w-6 h-2 bg-white"></div>
        <div class="w-6 h-2 flex">
          <span class="w-2 h-2 block bg-black"></span>
          <span class="w-2 h-2 block bg-white"></span>
          <span class="w-2 h-2 block bg-black"></span>
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
