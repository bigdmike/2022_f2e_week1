<template>
  <section class="relative z-10 w-full py-40 bg-primary_yellow">
    <div class="relative w-full max-w-screen-xl px-10 mx-auto xl:px-0">
      <header class="mb-20 sm:mb-32">
        <div class="relative mb-5">
          <h2
            class="relative z-10 text-5xl tracking-tighter text-black sm:text-6xl md:text-7xl font-pixel"
          >
            Hiring
          </h2>
          <span
            class="absolute top-0 left-0 z-0 text-5xl tracking-tighter transform translate-x-1 translate-y-1 sm:text-6xl text-primary_purple md:text-7xl font-pixel"
            >Hiring</span
          >
        </div>
        <h3
          class="text-2xl sm:text-3xl md:text-4xl text-primary_purple font-pixel"
        >
          職缺博覽會
        </h3>
      </header>

      <div
        v-for="item in hiring_list"
        :key="item.title"
        class="relative w-full px-10 py-12 mb-32 md:px-20 sm:px-14 md:py-16"
      >
        <div
          class="absolute left-0 right-0 flex items-start -top-2 sm:whitespace-nowrap"
        >
          <span
            class="block w-full h-2 bg-black sm:flex-initial sm:w-24"
          ></span>

          <div
            class="flex items-center flex-shrink-0 px-2 transform -translate-y-1/2 sm:px-5"
          >
            <img
              class="w-10 mt-3 mr-2 sm:mr-5 md:w-20 sm:w-14"
              :src="item.image"
            />
            <div class="relative flex-shrink-0 font-pixel">
              <h3
                class="relative z-10 w-full text-3xl sm:text-5xl md:text-6xl font-pixel"
              >
                {{ item.title }}
              </h3>
              <span
                class="text-[#FBBF00] md:text-6xl sm:text-5xl text-3xl font-pixel absolute top-0 left-0 z-0 transform translate-x-[4px] translate-y-[4px]"
              >
                {{ item.title }}</span
              >
            </div>
          </div>
          <span class="block w-full h-2 bg-black sm:w-full md:w-full"></span>
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

        <ol class="flex flex-col items-stretch -mx-10 md:flex-row">
          <li
            class="flex flex-wrap items-center justify-between w-full px-10 mb-10 sm:mb-0 md:justify-start md:items-stretch md:flex-col md:w-1/3"
            v-for="(job, job_index) in item.list"
            :key="`${item.title}_job_${job_index}`"
          >
            <div class="w-full sm:w-3/4 md:w-auto md:flex-1">
              <h4
                class="flex-1 mb-2 text-xl font-bold sm:text-2xl sm:mb-5 text-primary_purple"
                v-html="job.title"
              ></h4>
              <p class="mb-4 font-bold sm:text-xl sm:mb-8">{{ job.pay }}</p>
            </div>

            <div
              class="flex-shrink-0 w-full text-left sm:text-center sm:w-1/4 md:w-auto"
            >
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
