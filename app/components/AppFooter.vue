<template>
  <footer class="w-full pb-6 bg-tertiary">
    <div class="flex flex-col w-full px-5 mx-auto lg:px-9 md:max-w-[83.5rem]">
      <div class="grid lg:grid-cols-5 grid-cols-1 gap-8 py-6">
        <div class="flex flex-col gap-4">
          <h3 class="font-compact font-normal text-17 leading-6 text-txt">Стартапам</h3>
          <a class="font-compact font-normal text-17 leading-6 text-greytxt" href="/" target="_blank"
            rel="noopener noreferrer">
            Инвестиции
          </a>
          <a class="font-compact font-normal text-17 leading-6 text-greytxt" href="/" target="_blank"
            rel="noopener noreferrer">
            Коммерческий пилот
          </a>
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="font-compact font-normal text-17 leading-6 text-txt">Партнерам</h3>
          <a v-for="(item, i) in partners" :key="i" class="font-compact font-normal text-17 leading-6 text-greytxt"
            :href="item.link" target="_blank" rel="noopener noreferrer">
            {{ item.label }}
          </a>
        </div>

        <div class="flex flex-col gap-4 lg:col-span-2">
          <h3 class="font-compact font-normal text-17 leading-6 text-txt">Юридические документы</h3>
          <a v-for="(item, i) in documents" :key="i" class="font-compact font-normal text-17 leading-6 text-greytxt"
            :href="item.link" target="_blank" rel="noopener noreferrer">
            {{ item.label }}
          </a>
        </div>

        <div class="flex flex-col gap-4">
          <NuxtLink v-for="(item, i) in nav" :key="i" class="font-compact font-normal text-17 leading-6 text-txt"
            :to="item.link" target="_blank" rel="noopener noreferrer">
            {{ item.label }}
          </NuxtLink>
        </div>
      </div>

      <div class="grid lg:grid-cols-5 grid-cols-1 gap-8 py-6">
        <div class="flex flex-col gap-4">
          <h3 class="font-compact font-normal text-17 leading-6 text-txt">Сотрудничество</h3>
          <a class="font-compact font-normal text-17 leading-6 text-greytxt" href="/" target="_blank"
            rel="noopener noreferrer">
            Связаться
          </a>
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="font-compact font-normal text-17 leading-6 text-txt">Журналистам</h3>
          <a class="font-compact font-normal text-17 leading-6 text-greytxt" href="/" target="_blank"
            rel="noopener noreferrer">
            Связаться
          </a>
        </div>

        <div class="flex flex-col gap-4 lg:col-span-2">
          <h3 class="font-compact font-normal text-17 leading-6 text-txt">Предложения</h3>
          <a class="font-compact font-normal text-17 leading-6 text-greytxt" href="/" target="_blank"
            rel="noopener noreferrer">
            Связаться
          </a>
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="font-compact font-normal text-17 leading-6 text-txt">Социальные сети</h3>
          <div class="flex gap-4 items-center">
            <a v-for="(item, i) in social" :key="i" class="font-compact font-normal text-17 leading-6 text-greytxt"
              href="/" target="_blank" rel="noopener noreferrer">
              <img :src="item.img" class="w-11 h-11 object-cover">
            </a>
          </div>

        </div>
      </div>

      <div class="flex gap-6 items-start justify-between mt-8 text-base font-normal flex-row font-text text-greyfooter">
        <p class="">
          © {{ (new Date()).getFullYear() }} ПАО «МТС» Все права защищены
        </p>
        <p class="text-right">
          +18
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer__menu-item {
  padding: 9px 20px 9px 0;
  width: auto;
}
</style>

<script setup>
const partners = [
  {
    label: "Венчурным фондам",
    link: "/",
  },
  {
    label: "Институтам развития",
    link: "/",
  },
  {
    label: "Акселераторам и инкубаторам",
    link: "/",
  },
  {
    label: "Корпорациям",
    link: "/",
  },
  {
    label: "Бинес-ангелам и синдикатам",
    link: "/",
  },
  {
    label: "Экспертам",
    link: "/",
  },
  {
    label: "Венчурный клуб",
    link: "/",
  },
];

const documents = [
  {
    label: "Правила участия в пилоте",
    link: "/",
  },
  {
    label: "Правила венчурного клуба",
    link: "/",
  },
  {
    label: "Согласие на обработку ПД (пилот)",
    link: "/",
  },
  {
    label: "Согласие на обработку ПД (клуб)",
    link: "/",
  },
  {
    label: "Согласие на передачу информационных данных партнерам ПАО “МТС”",
    link: "/",
  },
  {
    label: "Политика обработки ПД",
    link: "/",
  },
  {
    label: "Политика обработки ПД ООО “Экосистема МТС”",
    link: "/",
  },
  {
    label: "Политика использования файлов “cookie”",
    link: "/",
  },
  {
    label: "Правила участия в резидентской программе",
    link: "/",
  },
  {
    label: "Политика использования файлов coockie Экосистема МТС",
    link: "/",
  },
  {
    label: "Архивные документы",
    link: "/",
  },
  {
    label: "Согласие на обработку ПД (пилот)",
    link: "/",
  },
];

const nav = [
  {
    label: "Блог",
    link: "/blog"
  },
  {
    label: "Вопрос-ответ",
    link: "/resident-program/#questions"
  },
  {
    label: "Обратная свзяь",
    link: "/"
  },
  {
    label: "Войти",
    link: "/"
  },
];

const social = [
  {
    img: "/Telegram.svg",
    link: "/blog"
  },
  {
    img: "/Vk.svg",
    link: "/"
  },
  {
    img: "Odnoklassniki.svg",
    link: "/"
  },
]
</script>