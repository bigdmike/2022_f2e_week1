<template>
  <div class="whitespace-nowrap">
    <span
      v-for="item in 100"
      :key="`top_marquee_${item}`"
      class="text-4xl tracking-normal font-pixel text-primary_purple text-opacity-40"
      >FRONTEND UI DESIGN</span
    >
  </div>
</template>
<script>
export default {
  name: 'MainTitleMarquee',
};
</script>
