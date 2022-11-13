<template>
  <div id="app" class="overflow-x-hidden bg-black">
    <MainHeader @open-action="TriggerMenu" />
    <MainMenu :status="menu_status" @close-action="TriggerMenu" />
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import MainMenu from '@/components/MainMenu.vue';

export default {
  name: 'App',
  components: {
    MainHeader,
    MainMenu,
  },
  data() {
    return {
      menu_status: false,
    };
  },
  methods: {
    TriggerMenu(val) {
      this.menu_status = val;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style src="@/assets/app.css"></style>
