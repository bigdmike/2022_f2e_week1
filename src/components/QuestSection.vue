<template>
  <section
    ref="MainContent"
    class="w-full h-[1000vh] font-pixel relative overflow-hidden"
  >
    <div
      ref="BackgroundImage"
      class="absolute top-0 left-0 transform z-[1] w-full h-screen"
    >
      <img
        v-for="item in quest_data.length + 2"
        :key="`bg_${item}`"
        src="/img/quest_background.svg"
        :class="
          item == 1
            ? ''
            : item == 2
            ? 'scale-[.25] opacity-1'
            : ' scale-[.1] opacity-0'
        "
        class="absolute top-0 left-0 transform z-[1] w-full h-screen origin-center bg_el"
      />
    </div>

    <div
      ref="background"
      class="absolute bg-[#52C4CC] top-0 bottom-0 left-0 right-0 z-0 w-full h-screen transform background"
    ></div>
    <div ref="AriticleBox" class="relative z-20 w-full h-screen">
      <article
        v-for="(item, item_index) in quest_data"
        :key="`quest_${item_index}`"
        class="absolute top-0 left-0 flex items-center justify-center w-full h-screen overflow-hidden bg-transparent"
      >
        <div
          :class="item_index % 2 == 0 ? 'justify-start' : 'justify-end'"
          class="flex items-center w-full max-w-screen-xl mx-auto"
        >
          <div>
            <div class="flex items-end mb-10">
              <p class="mr-5 text-2xl font-black">{{ item.sub_title }}</p>
              <p class="text-3xl font-black">{{ item.sponsor }}</p>
            </div>
            <header class="mb-10">
              <h2 class="font-black text-7xl" v-html="item.title"></h2>
            </header>
            <p class="mb-5 text-3xl font-black" v-html="item.content"></p>
            <div>
              <a
                target="_blank"
                :href="item.link"
                class="inline-block px-5 py-2 text-lg font-bold bg-yellow-500"
                >查看關卡細節</a
              >
            </div>
          </div>
        </div>
      </article>
      <article class="absolute z-0 opacity-0"></article>
      <article class="absolute z-0 opacity-0"></article>
    </div>
  </section>
</template>

<script>
import { gsap } from '@/gsap/gsap_loader';
export default {
  name: 'QuestSection',
  data() {
    return {
      quest_data: [
        {
          title: 'THE F2E<br />活動網站設計',
          sub_title: 'Week1',
          sponsor: '版塊設計',
          content: '視差滾動',
          link: '',
          background_color: '#52C4CC',
        },
        {
          title: '今晚我想來<br />點點簽',
          sub_title: 'Week2',
          sponsor: '凱鈿行動科技',
          content: 'Canvas',
          link: '',
          background_color: '#6633FF',
        },
        {
          title: 'SCRUM<br />新手村',
          sub_title: 'Week3',
          sponsor: '泰坦科技',
          content: 'JS DRAGGABLE',
          link: '',
          background_color: '#FF7A00',
        },
      ],
    };
  },
  mounted() {
    const articles = this.$refs.AriticleBox.querySelectorAll('article');
    const parent_height = articles[0].clientHeight;
    const bg_line = this.$refs.BackgroundImage.querySelectorAll('.bg_el');

    // reset
    articles.forEach((item, item_index) => {
      gsap.set(item, {
        opacity: item_index == 0 ? 1 : 1 / Math.pow(2, item_index),
        scale: item_index == 0 ? 1 : 1 / Math.pow(2, item_index),
      });
    });
    gsap.set(this.$refs.background, {
      backgroundColor: this.quest_data[0].background_color,
    });

    let first_tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.$refs.MainContent,
        start: 'top top',
        end: parent_height + ' top',
        scrub: true,
        // markers: true,
      },
    });

    first_tl.fromTo(
      this.$refs.AriticleBox,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      'same'
    );

    first_tl.fromTo(
      this.$refs.BackgroundImage,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      'same'
    );

    //articles
    articles.forEach((item, step_index) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: this.$refs.MainContent,
          start: step_index * 2 * parent_height + parent_height + ' top',
          end: step_index * 2 * parent_height + parent_height * 2 + ' top',
          scrub: true,
          // markers: true,
        },
        onStart: () => {
          console.log(step_index + ' START!');
        },
        onComplete: () => {
          console.log(step_index + ' END!');
        },
      });

      // line
      tl.to(
        bg_line[step_index],
        {
          scale: 4,
        },
        'same'
      );
      tl.to(
        bg_line[step_index + 1],
        {
          scale: 1,
        },
        'same'
      );
      tl.to(
        bg_line[step_index + 2],
        {
          opacity: 1,
          scale: 0.25,
        },
        'same'
      );

      // background
      if (step_index == 0) {
        tl.fromTo(
          this.$refs.background,
          {
            backgroundColor: this.quest_data[step_index].background_color,
          },
          {
            backgroundColor: this.quest_data[step_index].background_color,
            ease: 'none',
          },
          'same'
        );
      } else if (step_index <= this.quest_data.length - 1) {
        tl.to(
          this.$refs.background,
          {
            backgroundColor: this.quest_data[step_index].background_color,
            ease: 'none',
          },
          'same'
        );
      } else if (step_index == articles.length - 2) {
        tl.to(
          this.$refs.background,
          {
            backgroundColor: 'black',
            ease: 'none',
          },
          'same'
        );
      }

      //articles
      articles.forEach((article, article_index) => {
        tl.to(
          article,
          {
            scale:
              article_index == step_index
                ? 1
                : article_index < step_index
                ? 2
                : 1 / Math.pow(2, article_index - step_index),
            opacity:
              article_index == step_index
                ? 1
                : article_index < step_index
                ? 0
                : 1 / Math.pow(2, article_index - step_index),
            ease: 'none',
          },
          'same'
        );
      });
    });

    gsap.to(this.$refs.AriticleBox, {
      scrollTrigger: {
        trigger: this.$refs.MainContent,
        start: 'top top',
        end: 'bottom bottom',
        pin: this.$refs.AriticleBox,
      },
    });

    gsap.to(this.$refs.BackgroundImage, {
      scrollTrigger: {
        trigger: this.$refs.MainContent,
        start: 'top top',
        end: 'bottom bottom',
        pin: this.$refs.BackgroundImage,
      },
    });

    gsap.to(this.$refs.background, {
      scrollTrigger: {
        trigger: this.$refs.MainContent,
        start: 'top top',
        end: 'bottom bottom',
        pin: this.$refs.background,
      },
    });
  },
};
</script>
