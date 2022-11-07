<template>
  <section
    class="relative flex flex-col items-start w-full h-screen bg-black pt-80"
  >
    <div class="relative inline-block mb-40">
      <h3 class="text-white font-pixel text-8xl">羨慕別人酷酷的網頁動畫</h3>
      <img
        src="/img/character/ghost_blue.svg"
        class="absolute h-full transform translate-x-full -translate-y-1/2 -right-10 top-1/2"
      />
      <img
        src="/img/pacman_yellow_open.svg"
        class="absolute -right-20 h-full transform translate-x-[200%] -translate-y-1/2 top-1/2"
      />
    </div>
    <div class="relative self-end inline-block mb-40">
      <h3 class="text-white font-pixel text-8xl">動畫技能樹太雜無從下手</h3>
      <img
        src="/img/character/ghost_purple.svg"
        class="absolute h-full transform -translate-x-full -translate-y-1/2 -scale-x-100 -left-10 top-1/2"
      />
      <img
        src="/img/pacman_yellow_open.svg"
        class="absolute -left-20 h-full transform -scale-x-100 -translate-x-[200%] -translate-y-1/2 top-1/2"
      />
    </div>
    <div class="relative inline-block">
      <h3 class="text-white font-pixel text-8xl">滿足不了同事的許願</h3>
      <img
        src="/img/character/ghost_orange.svg"
        class="absolute h-full transform translate-x-full -translate-y-1/2 -right-10 top-1/2"
      />
      <img
        src="/img/pacman_yellow_open.svg"
        class="absolute -right-20 h-full transform translate-x-[200%] -translate-y-1/2 top-1/2"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'QuestionSection',
};
</script>
