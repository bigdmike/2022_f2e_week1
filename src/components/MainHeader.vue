<template>
  <nav
    class="fixed z-40 w-full max-w-screen-xl px-10 transform -translate-x-1/2 xl:px-0 top-8 left-1/2"
  >
    <div class="flex items-center justify-end">
      <img src="/img/THE F2E.svg" class="mr-8" />
      <div class="relative">
        <ol class="relative z-10 flex items-center py-2 bg-white px-7">
          <li v-for="item in menu_list" :key="item.title" class="mx-1">
            <a :href="item.link" target="_blank" class="px-2 py-1 font-bold">{{
              item.title
            }}</a>
          </li>
        </ol>
        <div
          class="absolute top-0 bottom-0 left-0 right-0 transform translate-x-1 translate-y-1 bg-primary_purple"
        ></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainHeader',
  data() {
    return {
      menu_list: [
        {
          title: '關卡資訊',
          link: '',
        },
        {
          title: '作品列表',
          link: '',
        },
        {
          title: '攻略資源',
          link: '',
        },
        {
          title: '求職專區',
          link: '',
        },
      ],
    };
  },
};
</script>
