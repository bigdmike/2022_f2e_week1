<template>
  <section
    ref="MainContent"
    class="relative z-10 w-full py-40 bg-primary_yellow"
  >
    <div
      class="flex flex-wrap w-full max-w-screen-xl px-5 mx-auto xl:px-0 sm:px-10"
    >
      <div class="w-full pr-5 mb-10 md:w-1/4 md:mb-0">
        <ol class="flex flex-wrap md:block">
          <li v-for="item in category" :key="item.title">
            <button
              @click="active_category = item.title"
              :class="
                item.title == active_category ? 'text-primary_purple' : ''
              "
              class="w-full px-2 py-2 text-left underline transition-colors duration-200 font-pixel hover:text-primary_purple"
            >
              {{ item.title }}
            </button>
          </li>
        </ol>
      </div>
      <div class="w-full md:w-3/4">
        <h4 class="mb-5 text-2xl font-pixel">{{ active_category }}</h4>
        <ol>
          <li
            class="mb-5"
            v-for="(question, question_index) in active_question_list"
            :key="`${question.title}_${question_index}`"
          >
            <button
              @click="TriggerStatus(question_index)"
              class="flex items-center justify-between w-full px-4 py-4 text-left transition-colors duration-200 bg-white border-2 border-black rounded-md sm:px-6 hover:text-primary_purple"
            >
              <p>{{ question.title }}</p>
              <img
                src="/2022_f2e_week1/img/arrow.svg"
                class="w-5 transform"
                :class="open_status[question_index] ? 'rotate-180' : ''"
              />
            </button>
            <div
              :class="
                open_status[question_index]
                  ? 'max-h-screen py-4'
                  : 'max-h-0 py-0'
              "
              class="block w-full px-4 overflow-hidden text-left transition-all duration-200 sm:px-6"
              v-html="question.content"
            ></div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CommonQuestionSection',
  data() {
    return {
      category: [
        {
          title: '常見問答',
          list: [
            {
              title: 'Q：如果某一週不小心挑戰失敗，是否能再繼續挑戰後面關卡？',
              content:
                'A：可以，儘管那週挑戰失敗，之後您仍可以挑選喜歡的關卡進行挑戰，並在該關卡期限內繳交作品。',
            },
            {
              title:
                'Q：大家都好強，我怕我做的東西沒有達到過關門檻，不敢登錄作品',
              content:
                'A：這個活動並非競爭性質，每個參賽者都是你的隊友，最大的敵人是你自己，因為你必須定期練功前端開發，讓自己能夠順利完賽。',
            },
            {
              title:
                'Q：我不確定自己做的版型有沒有符合過關門檻，要寫到什麼程度才有到過關門檻？',
              content:
                'A：主辦單位其實不會去審核大家的程式碼，只要你認為當週你有針對主題有做到一定程度，就算是半完成品也請大方投稿，不用擔心。',
            },
            {
              title: 'Q：我已經寫到一半了，但時間快來不及，可以先投稿嗎？',
              content: 'A：可以，有投稿表示你還會持續努力在這次活動上。',
            },
          ],
        },
        {
          title: 'UI設計師常見問題',
          list: [
            {
              title:
                'Q：到時投稿到平台是提供什麼呢？我也不像是工程師可以有 CODEPEN 上傳。',
              content:
                'A：其中投稿的欄位裡面會有一個「線上標示文件」，像是 Adobe XD 便有提供該服務(範例連結)，屆時提供標示文件後，便可讓其他前端工程師採用你的設計稿來開發。',
            },
            {
              title:
                'Q：投稿上去的 UI 作品，我知道需要授權讓前端工程師組做成 Web 介面，那授權部分可以設定嗎？',
              content:
                'A：會有的，屆時平台投稿流程上，會讓您的作品可以選擇 CC0、CC BY 等授權，以保障您的 UI 作品權益。',
            },
            {
              title: 'Q：一定要上傳「線上標示文件」嗎？',
              content:
                'A：是的，因為這樣才有辦法讓其他前端工程師，能採用您的設計稿，將您的設計稿實作出網頁格式。如果您是使用 Sketch，也可使用 Sketch Measure 編譯出來後，壓縮 ZIP 到雲端空間 (Dropbox、Google Drive)。',
            },
            {
              title: 'Q：不能使用 PS、Illustrator 設計嗎？',
              content:
                'A：只要您能找到 PS 或 Illustrator 產出線上標示文件的方式就可以，因為前端工程師大部分皆比較少具有繪圖軟體，所以用線上標示文件將會減少許工程師協作上的溝通時間。',
            },
            {
              title: 'Q：當每週一題目出來後，我有一些設計進度也可以先投稿嗎？',
              content:
                'A：可以，團隊在協作過程中，一定也會先出些進度提供前端切版，有進度時您也可以先投稿，讓前端工程師可以先接手，之後再透過 FB 社團來溝通進度即可。',
            },
          ],
        },
        {
          title: '前端工程師常見問題',
          list: [
            {
              title:
                'Q：我可以不依照設計稿，自己做版面嗎？因為我想多練習 JS / 後端',
              content:
                'A：可以，The F2E 活動是希望讓大家人人有功練，所以依照你自己想投入的方向練功即可。CSS 也可以用框架，例如 Bootstrap。',
            },
            {
              title: 'Q：前端介面一定要長得一模一樣嗎？',
              content: 'A：不用，依照自己的想法來開發也可以',
            },
            {
              title: 'Q：有現成的網頁靜態頁面嗎？我想只練習 JS / 後端就好',
              content:
                'A：這段我們不會提供，畢竟每個人習慣的 Coding style 又不一樣，產出的 HTML、CSS 並非是自己習慣的 Layout 反而會更花時間。',
            },
            {
              title:
                'Q：那我只想要練習 JS，HTML/CSS 我用陽春版，不依照設計稿開發可以嗎？',
              content:
                'A：可以，你可以當做我們就是出一個主題，你依照那主題當作參考方向來開發即可。',
            },
          ],
        },
        {
          title: '團體組常見問題',
          list: [
            {
              title: 'Q：請問團體組最多幾人？',
              content: 'A：最多 4 人，投稿作品時請派一位組長來投稿即可。',
            },
            {
              title: 'Q：我對獎項有興趣，可以只做第三道主題就好嗎？',
              content:
                'A：可以，您可以在這場活動中，和組員一起打磨第三道主題，不用三個主題都做。',
            },
            {
              title: 'Q：那團體組第三道主題最晚投稿期限為？',
              content:
                'A：團體組投稿第三週 UI 最晚投稿時間為 11/21(一) 中午 12 點，前端最晚投稿期限為 11/28(一) 中午 12 點。',
            },
            {
              title:
                'Q：我們團體組比較想做手機 APP，可以投稿並符合評審門檻嗎？',
              content:
                'A：您可以開發手機 APP，若有在期限前投稿也能獲得數位獎狀。但評審門檻僅限 Web 瀏覽器應用開發，Android、iOS APP 則不在評審範圍內，故不符合評審門檻。',
            },
            {
              title:
                'Q：請問除了前端開發、UI 設計外，還能做其他加值應用嗎？例如後端動態應用整合？',
              content:
                'A：可以的，只要能透過網頁瀏覽器操控您的服務，並有使用到 TDX API 的任何一個 API，您可以依照本次主題「全台公車動態時刻查詢應用服務」做最大的加值整合應用，甚至搭配後端應用，整合多個外部 API 也是可以的。',
            },
            {
              title:
                'Q：團體組的 UI 設計稿，可以讓『個人組-前端工程師』組別採用嗎？',
              content: 'A：不能，預設是不能讓『個人組-前端工程師』採用。',
            },
          ],
        },
      ],
      active_category: '常見問答',
      open_status: [],
    };
  },
  methods: {
    SetStatus() {
      this.open_status = [];
      this.active_question_list.forEach(() => {
        this.open_status.push(false);
      });
    },
    TriggerStatus(question_index) {
      console.log('here');
      this.$set(
        this.open_status,
        question_index,
        !this.open_status[question_index]
      );
    },
  },
  watch: {
    active_category() {
      this.SetStatus();
    },
  },
  computed: {
    active_question_list() {
      return this.category.filter(
        (item) => item.title == this.active_category
      )[0].list;
    },
  },
  created() {
    this.SetStatus();
  },
};
</script>
