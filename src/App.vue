<template>
  <div id="app" class="overflow-hidden bg-black">
    <MainHeader />
    <CoverSection />
    <SignUpSection />
    <QuestionSection />
    <MainTitle />
    <QuestSection />
    <div class="w-full overflow-hidden">
      <TimelineSection />
    </div>
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
// import { ZoomInScroll } from '@/gsap/scroll/zoom_in';

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
  },
  data() {
    return {
      zoom_in_scroll: null,
    };
  },
  mounted() {
    // this.zoom_in_scroll = new ZoomInScroll();
    // this.zoom_in_scroll.setup();
  },
};
</script>

<style src="@/assets/app.css"></style>
