<template>
  <div id="app" class="overflow-x-hidden bg-black">
    <MainHeader @open-action="TriggerMenu" />
    <MainMenu :status="menu_status" @close-action="TriggerMenu" />
    <CoverSection />
    <QuestionSection />
    <MainTitle />
    <QuestSection />
    <div class="w-full overflow-hidden">
      <TimelineSection />
    </div>
    <SignUpSection />
    <SponsorSection />
    <HiringSection />
  </div>
</template>

<script>
import QuestSection from '@/components/QuestSection.vue';
import CoverSection from '@/components/CoverSection.vue';
import TimelineSection from '@/components/TimelineSection.vue';
import MainTitle from '@/components/MainTitle.vue';
import QuestionSection from '@/components/QuestionSection.vue';
import MainHeader from '@/components/MainHeader.vue';
import SignUpSection from '@/components/SignUpSection.vue';
import SponsorSection from '@/components/SponsorSection.vue';
import HiringSection from '@/components/HiringSection.vue';
import MainMenu from '@/components/MainMenu.vue';

export default {
  name: 'App',
  components: {
    QuestSection,
    CoverSection,
    TimelineSection,
    MainTitle,
    QuestionSection,
    MainHeader,
    SignUpSection,
    SponsorSection,
    HiringSection,
    MainMenu,
  },
  data() {
    return {
      zoom_in_scroll: null,
      menu_status: false,
    };
  },
  methods: {
    TriggerMenu(val) {
      console.log(val);
      this.menu_status = val;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style src="@/assets/app.css"></style>
