<template>
  <section class="relative z-10 w-full py-40 bg-primary_yellow">
    <div class="relative w-full max-w-screen-xl mx-auto">
      <header class="mb-32">
        <div class="relative mb-5">
          <h2
            class="relative z-10 tracking-tighter text-black text-7xl font-pixel"
          >
            Hiring
          </h2>
          <span
            class="absolute top-0 left-0 z-0 tracking-tighter transform translate-x-1 translate-y-1 text-primary_purple text-7xl font-pixel"
            >Hiring</span
          >
        </div>
        <h3 class="text-4xl text-primary_purple font-pixel">職缺博覽會</h3>
      </header>

      <div
        v-for="item in hiring_list"
        :key="item.title"
        class="relative w-full px-20 py-16 mb-32"
      >
        <div
          class="absolute left-0 right-0 flex items-start -top-2 whitespace-nowrap"
        >
          <span class="block w-24 h-2 bg-black"></span>

          <div class="flex items-center px-5 transform -translate-y-1/2">
            <img class="w-20 mt-3 mr-5" :src="item.image" />
            <div class="relative flex-shrink-0 font-pixel">
              <h3 class="relative z-10 w-full text-6xl font-pixel">
                {{ item.title }}
              </h3>
              <span
                class="text-[#FBBF00] text-6xl font-pixel absolute top-0 left-0 z-0 transform translate-x-[4px] translate-y-[4px]"
              >
                {{ item.title }}</span
              >
            </div>
          </div>
          <span class="flex-1 block h-2 bg-black"></span>
        </div>
        <!-- <span class="absolute left-0 right-0 w-full h-2 bg-black -bottom-2">        </span>
-->
        <div
          class="absolute left-0 right-0 flex items-end -bottom-2 whitespace-nowrap"
        >
          <span class="flex-1 block h-2 bg-black"></span>

          <div class="flex items-center px-5 transform translate-y-1/2">
            <a
              target="_blank"
              :href="item.link"
              class="px-8 py-2 font-bold transition-all duration-200 transform bg-primary_purple text-primary_yellow hover:bg-black hover:scale-110"
              >查看更多</a
            >
          </div>
          <span class="flex-1 block h-2 bg-black"></span>
        </div>
        <span
          class="absolute top-0 bottom-0 w-2 h-full bg-black -left-2"
        ></span>
        <span
          class="absolute top-0 bottom-0 w-2 h-full bg-black -right-2"
        ></span>

        <ol class="flex items-stretch -mx-10">
          <li
            class="flex flex-col w-1/3 px-10"
            v-for="(job, job_index) in item.list"
            :key="`${item.title}_job_${job_index}`"
          >
            <h4
              class="flex-1 mb-5 text-2xl font-bold text-primary_purple"
              v-html="job.title"
            ></h4>
            <p class="mb-8 text-xl font-bold">{{ job.pay }}</p>

            <div>
              <a
                target="_blank"
                :href="job.link"
                class="px-5 py-1 font-bold transition-all duration-200 bg-black inlineblock text-primary_yellow hover:bg-primary_purple"
                >應徵</a
              >
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HiringSectioin',
  data() {
    return {
      hiring_list: [
        {
          title: '版塊設計',
          image: '/img/hiring/blockstudio_logo 1.jpg',
          link: 'https://2022.thef2e.com/jobs',
          list: [
            {
              title: '資深前端工程師<br/>Sr.Front-End Developer',
              pay: '900K~1.2M / 年',
              link: 'https://blockstudio.tw/career/',
            },
            {
              title: '前端工程師<br/>Front-End Developer',
              pay: '650K~720K / 年',
              link: 'https://blockstudio.tw/career/',
            },
            {
              title: '品牌行銷<br/>Brand Marketing',
              pay: '35K~42K / 月',
              link: 'https://blockstudio.tw/career/',
            },
          ],
        },
        {
          title: '新加坡商鈦坦科技',
          image: '/img/hiring/sponsor_img-1.jpg',
          link: 'https://2022.thef2e.com/jobs',
          list: [
            {
              title:
                'Software Engineer / Programmer<br/>軟體工程師<br/>(台北、台中、高雄)',
              pay: '50K 以上 / 月',
              link: 'https://www.104.com.tw/company/1a2x6bin60?jobsource=cs_2018indexpoc',
            },
            {
              title:
                'Front-End Software Engineer / Programmer<br/>前端軟體工程師<br/>(台中市政府旁)',
              pay: '45K 以上 / 月',
              link: 'https://www.104.com.tw/company/1a2x6bin60?jobsource=cs_2018indexpoc',
            },
            {
              title: 'Product Designer<br/>(台北、高雄)',
              pay: '40K 以上 / 月',
              link: 'https://www.104.com.tw/company/1a2x6bin60?jobsource=cs_2018indexpoc',
            },
          ],
        },
        {
          title: '凱鈿行動科技',
          image: '/img/hiring/sponsor_img.jpg',
          link: 'https://2022.thef2e.com/jobs',
          list: [
            {
              title: '軟體助理工程師<br/>(台北)',
              pay: '薪資待遇 面議',
              link: 'https://kdanmobile.teamdoor.io/s/ZO0dKYaI',
            },
            {
              title: '前端工程師<br/>(台南)',
              pay: '薪資待遇 面議',
              link: 'https://kdanmobile.teamdoor.io/s/qh6R4I5o',
            },
            {
              title: '後端工程師<br/>(台南)',
              pay: '35K~42K / 月',
              link: 'https://kdanmobile.teamdoor.io/s/EoK6qe57',
            },
          ],
        },
      ],
    };
  },
};
</script>
