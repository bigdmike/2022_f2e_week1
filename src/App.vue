<template>
  <div id="app" class="overflow-x-hidden bg-black">
    <MainHeader @open-action="TriggerMenu" />
    <MainMenu :status="menu_status" @close-action="TriggerMenu" />
    <MainLoading />
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import MainMenu from '@/components/MainMenu.vue';
import MainLoading from '@/components/MainLoading.vue';

export default {
  name: 'App',
  components: {
    MainHeader,
    MainMenu,
    MainLoading,
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
