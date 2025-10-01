<template>
    <section class="px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full">
        <div class="flex items-center justify-between mb-8">
            <h2 class="appear-up font-wide font-medium text-txt lg:text-4xl text-3xl leading-none uppercase">
                Анализ зарубежных единорогов
            </h2>
            <div class="flex items-center gap-2">
                <div data-role="prev-btn"
                    class="appear-up rounded-full cursor-pointer flex items-center justify-center bg-tertiary w-16 h-16"
                    @click="slidePrev">
                    <Arrow />
                </div>

                <div data-role="next-btn"
                    class="appear-up rounded-full cursor-pointer flex items-center justify-center bg-tertiary w-16 h-16"
                    @click="slideNext">
                    <Arrow class="rotate-180" />
                </div>
            </div>
        </div>

        <p class="appear-up font-normal text-greytxt text-2xl font-compact mb-8">
            Лучшие практики и возможности копирования на локальный рынок
        </p>
        <swiper :slides-per-view="slidesAmount" :space-between="32" @swiper="onSwiper" ref="swiperRef"
            class="flex items-center gap-24 absolute top-0 left-0">
            <swiper-slide v-for="(article, i) in articles" :key="i"
                class="appear-up w-full flex flex-col shadow-shadow rounded-3xl p-4">
                <div class="flex flex-wrap items-center gap-2 mb-2">
                    <p class="py-2 px-4 bg-brand font-text font-normal text-sm text-white h-fit rounded-2xl">{{
                        article.date }}</p>
                    <p class="py-2 px-4 bg-brand font-text font-normal text-sm text-white h-fit rounded-2xl">{{
                        article.status }}</p>
                </div>

                <h3 class="font-compact font-medium text-txt text-17 leading-6 mb-2">{{ article.heading }}</h3>

                <p class="flex flex-col gap-4 font-text font-normal text-greytxt text-sm clamped-text mb-[22px]">
                    {{ article.txt }}
                </p>

                <NuxtLink :to="article.link"
                    class="font-wide font-bold text-white text-[10px] leading-3 uppercase py-2.5 px-[18px] rounded-xl bg-brand w-full flex items-center justify-center">
                    Подробнее
                </NuxtLink>

            </swiper-slide>
        </swiper>
    </section>
</template>

<script setup>
import Arrow from './icons/Arrow.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'
import { onMounted, ref, onBeforeUnmount } from 'vue';

const articles = [
    {
        date: "18.08.2025",
        status: "Событие завершилось",
        heading: "Unicorn Case Study: ScalaPay",
        txt: "На этот раз мы проанализируем ScalaPay, сервис для частичной оплаты покупок в магазинах ритейлеров. Этот BNPL-сервис является одним из лидеров в Южной Европе. Компания была основана в 2019 году и за три года достигла статуса единорога. Ее оценка составляет $1,1 млрд., а общий объем привлеченного финансирования — $439 млн.",
        link: "/"
    },
    {
        date: "18.08.2025",
        status: "Событие завершилось",
        heading: "Unicorn Case Study: ScalaPay",
        txt: "На этот раз мы проанализируем ScalaPay, сервис для частичной оплаты покупок в магазинах ритейлеров. Этот BNPL-сервис является одним из лидеров в Южной Европе. Компания была основана в 2019 году и за три года достигла статуса единорога. Ее оценка составляет $1,1 млрд., а общий объем привлеченного финансирования — $439 млн.",
        link: "/"
    },
    {
        date: "18.08.2025",
        status: "Событие завершилось",
        heading: "Unicorn Case Study: ScalaPay",
        txt: "На этот раз мы проанализируем ScalaPay, сервис для частичной оплаты покупок в магазинах ритейлеров. Этот BNPL-сервис является одним из лидеров в Южной Европе. Компания была основана в 2019 году и за три года достигла статуса единорога. Ее оценка составляет $1,1 млрд., а общий объем привлеченного финансирования — $439 млн.",
        link: "/"
    },
    {
        date: "18.08.2025",
        status: "Событие завершилось",
        heading: "Unicorn Case Study: ScalaPay",
        txt: "На этот раз мы проанализируем ScalaPay, сервис для частичной оплаты покупок в магазинах ритейлеров. Этот BNPL-сервис является одним из лидеров в Южной Европе. Компания была основана в 2019 году и за три года достигла статуса единорога. Ее оценка составляет $1,1 млрд., а общий объем привлеченного финансирования — $439 млн.",
        link: "/"
    },
    {
        date: "18.08.2025",
        status: "Событие завершилось",
        heading: "Unicorn Case Study: ScalaPay",
        txt: "На этот раз мы проанализируем ScalaPay, сервис для частичной оплаты покупок в магазинах ритейлеров. Этот BNPL-сервис является одним из лидеров в Южной Европе. Компания была основана в 2019 году и за три года достигла статуса единорога. Ее оценка составляет $1,1 млрд., а общий объем привлеченного финансирования — $439 млн.",
        link: "/"
    },
    {
        date: "18.08.2025",
        status: "Событие завершилось",
        heading: "Unicorn Case Study: ScalaPay",
        txt: "На этот раз мы проанализируем ScalaPay, сервис для частичной оплаты покупок в магазинах ритейлеров. Этот BNPL-сервис является одним из лидеров в Южной Европе. Компания была основана в 2019 году и за три года достигла статуса единорога. Ее оценка составляет $1,1 млрд., а общий объем привлеченного финансирования — $439 млн.",
        link: "/"
    },
]

const slidesAmount = ref(window.innerwidth >= 1180 ? 3 : window.innerWidth >= 640 ? 2 : 1);
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

function debounce(fn, delay = 200) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

function updateSlidesAmount() {
    console.log('update')
    slidesAmount.value =
        window.innerWidth >= 1180 ? 3 :
            window.innerWidth >= 640 ? 2 : 1;
}

const debouncedUpdate = debounce(updateSlidesAmount, 200);

onMounted(() => {
    window.addEventListener('resize', debouncedUpdate);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', debouncedUpdate);
});
</script>

<style scoped>
.clamped-text {
    display: -webkit-box;
    line-clamp: 5;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>