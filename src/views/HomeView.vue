<template>
  <div id="home" class="overflow-x-hidden bg-black">
    <CoverSection />
    <QuestionSection />
    <MainTitle />
    <QuestSection />
    <div class="w-full overflow-hidden">
      <TimelineSection />
    </div>
    <SignUpSection />
    <CommonQuestion />
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
import SignUpSection from '@/components/SignUpSection.vue';
import SponsorSection from '@/components/SponsorSection.vue';
import HiringSection from '@/components/HiringSection.vue';
import CommonQuestion from '@/components/CommonQuestion.vue';

export default {
  name: 'HomePageView',
  components: {
    QuestSection,
    CoverSection,
    TimelineSection,
    MainTitle,
    QuestionSection,
    SignUpSection,
    SponsorSection,
    HiringSection,
    CommonQuestion,
  },
};
</script>
