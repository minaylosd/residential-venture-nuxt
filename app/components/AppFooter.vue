<template>
  <footer class="w-full py-16 bg-tertiary">
    <div
      class="max-w-screen-sm px-5 mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
    >
      <div class="w-full flex flex-col items-start">
        <div
          class="flex w-full justify-center"
        >
          <ul
            class="flex md:flex-row flex-col items-center md:justify-start justify-center flex-wrap gap-6 pl-0"
          >
            <li class="flex">
              <a
                class="text-base text-center font-normal font-text text-greyfooter"
                href="/pages/agreement"
                target="_blank"
              >
                Согласие на обработку персональных данных
              </a>
            </li>
            <li>
              <a
                class="text-base font-normal font-text text-greyfooter"
                href="/"
                target="_blank"
              >
                Условия проведения акции
              </a>
            </li>
            <li>
              <a
                class="text-base font-normal font-text text-greyfooter"
                href="https://mts.ru/personal/kontaktu"
                target="_blank"
              >Контакты</a>
            </li>
            <li>
              <a
                class="text-base font-normal font-text text-greyfooter whitespace-nowrap"
                target="_blank"
                href="https://mts.ru/about/investoram-i-akcioneram/korporativnoe-upravlenie/raskritie-informacii"
              >Раскрытие
                информации</a>
            </li>
            <li>
              <a
                class="text-base font-normal font-text text-greyfooter whitespace-nowrap"
                target="_blank"
                href="https://mts.ru/about/investoram-i-akcioneram/korporativnoe-upravlenie/dokumenti-pao-mts"
              >Документы
                ПАО МТС</a>
            </li>
            <li>
              <a
                class="text-base font-normal font-text text-greyfooter whitespace-nowrap"
                target="_blank"
                href="https://mts.ru/personal/cookie"
              >Политика обработки
                cookies</a>
            </li>
            <li>
              <a
                class="text-base font-normal font-text text-greyfooter whitespace-nowrap"
                target="_blank"
                href="https://mts.ru/about/komplaens-i-delovaya-etika"
              >Комплаенс
                и деловая этика</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="flex gap-6 items-start justify-between mt-8 text-base font-normal flex-row font-text text-greyfooter"
      >
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
