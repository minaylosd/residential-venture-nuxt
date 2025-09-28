<template>
    <section class="px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full">
        <div class="flex items-center justify-between mb-8">
            <h2 class="font-wide font-medium text-txt text-4xl leading-none uppercase">
                Статьи и аналитика
            </h2>
            <div class="flex items-center gap-2">
                <div data-role="prev-btn"
                    class="rounded-full cursor-pointer flex items-center justify-center bg-tertiary w-16 h-16"
                    @click="slidePrev">
                    <Arrow />
                </div>

                <div data-role="next-btn"
                    class="rounded-full cursor-pointer flex items-center justify-center bg-tertiary w-16 h-16"
                    @click="slideNext">
                    <Arrow class="rotate-180" />
                </div>
            </div>
        </div>
        <swiper :slides-per-view="3" :space-between="32" @swiper="onSwiper" ref="swiperRef"
            class="flex items-center gap-24 absolute top-0 left-0 mb-8">
            <swiper-slide v-for="(article, i) in articles" :key="i"
                class="w-full flex flex-col rounded-3xl overflow-hidden relative aspect-[400/288]">
                <img :src="article.img" class="rounded-3xl w-full h-auto object-cover">
                <div class="absolute bottom-0 left-0 w-full p-6 bg-tertiary h-36 rounded-3xl">
                    <h3 class="font-wide font-medium text-txt text-xl leading-6">{{ article.text }}</h3>
                </div>
            </swiper-slide>
        </swiper>

        <div class="flex w-full justify-center">
            <NuxtLink to="/articles" class="font-wide font-medium text-xl leading-6 text-brand w-fit">
                Все статьи
            </NuxtLink>
        </div>

    </section>
</template>

<script setup>
import Arrow from './icons/Arrow.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'

const props = defineProps({
    articles: Array
});
// const articles = [
//     {
//         date: "18.08.2025",
//         status: "Событие завершилось",
//         heading: "Unicorn Case Study: ScalaPay",
//         txt: "На этот раз мы проанализируем ScalaPay, сервис для частичной оплаты покупок в магазинах ритейлеров. Этот BNPL-сервис является одним из лидеров в Южной Европе. Компания была основана в 2019 году и за три года достигла статуса единорога. Ее оценка составляет $1,1 млрд., а общий объем привлеченного финансирования — $439 млн.",
//         link: "/"
//     },
//     {
//         date: "18.08.2025",
//         status: "Событие завершилось",
//         heading: "Unicorn Case Study: ScalaPay",
//         txt: "На этот раз мы проанализируем ScalaPay, сервис для частичной оплаты покупок в магазинах ритейлеров. Этот BNPL-сервис является одним из лидеров в Южной Европе. Компания была основана в 2019 году и за три года достигла статуса единорога. Ее оценка составляет $1,1 млрд., а общий объем привлеченного финансирования — $439 млн.",
//         link: "/"
//     },
//     {
//         date: "18.08.2025",
//         status: "Событие завершилось",
//         heading: "Unicorn Case Study: ScalaPay",
//         txt: "На этот раз мы проанализируем ScalaPay, сервис для частичной оплаты покупок в магазинах ритейлеров. Этот BNPL-сервис является одним из лидеров в Южной Европе. Компания была основана в 2019 году и за три года достигла статуса единорога. Ее оценка составляет $1,1 млрд., а общий объем привлеченного финансирования — $439 млн.",
//         link: "/"
//     },
//     {
//         date: "18.08.2025",
//         status: "Событие завершилось",
//         heading: "Unicorn Case Study: ScalaPay",
//         txt: "На этот раз мы проанализируем ScalaPay, сервис для частичной оплаты покупок в магазинах ритейлеров. Этот BNPL-сервис является одним из лидеров в Южной Европе. Компания была основана в 2019 году и за три года достигла статуса единорога. Ее оценка составляет $1,1 млрд., а общий объем привлеченного финансирования — $439 млн.",
//         link: "/"
//     },
//     {
//         date: "18.08.2025",
//         status: "Событие завершилось",
//         heading: "Unicorn Case Study: ScalaPay",
//         txt: "На этот раз мы проанализируем ScalaPay, сервис для частичной оплаты покупок в магазинах ритейлеров. Этот BNPL-сервис является одним из лидеров в Южной Европе. Компания была основана в 2019 году и за три года достигла статуса единорога. Ее оценка составляет $1,1 млрд., а общий объем привлеченного финансирования — $439 млн.",
//         link: "/"
//     },
//     {
//         date: "18.08.2025",
//         status: "Событие завершилось",
//         heading: "Unicorn Case Study: ScalaPay",
//         txt: "На этот раз мы проанализируем ScalaPay, сервис для частичной оплаты покупок в магазинах ритейлеров. Этот BNPL-сервис является одним из лидеров в Южной Европе. Компания была основана в 2019 году и за три года достигла статуса единорога. Ее оценка составляет $1,1 млрд., а общий объем привлеченного финансирования — $439 млн.",
//         link: "/"
//     },
// ]

const swiperRef = ref(null);
let swiperInstance = null;

// Получаем инстанс Swiper
function onSwiper(swiper) {
    swiperInstance = swiper;
}

function slideNext() {
    if (swiperInstance) swiperInstance.slideNext();
}

function slidePrev() {
    if (swiperInstance) swiperInstance.slidePrev();
}
</script>

<style scoped>
.clamped-text {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>