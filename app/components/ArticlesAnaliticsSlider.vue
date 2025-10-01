<template>
    <section class="px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full">
        <div class="flex items-center justify-between mb-8">
            <h2 class="appear-up font-wide font-medium text-txt lg:text-4xl text-3xl leading-none uppercase">
                Статьи и аналитика
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
        <swiper :slides-per-view="slidesAmount" :space-between="32" @swiper="onSwiper" ref="swiperRef"
            class="flex items-center gap-24 absolute top-0 left-0 mb-8">
            <swiper-slide v-for="(article, i) in articles" :key="i"
                class="appear-up w-full flex flex-col rounded-3xl overflow-hidden relative aspect-[400/288]">
                <NuxtLink :to="article.link">
                    <img :src="article.img" class="rounded-3xl w-full h-auto object-cover">
                    <div class="absolute bottom-0 left-0 w-full p-6 bg-tertiary h-36 rounded-3xl">
                        <h3 class="font-wide font-medium text-txt text-xl leading-6">{{ article.text }}</h3>
                    </div>
                </NuxtLink>
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
import { onMounted, ref, onBeforeUnmount } from 'vue';
import 'swiper/css'

const props = defineProps({
    articles: Array
});
const slidesAmount = ref(window.innerwidth >= 1180 ? 3 : window.innerWidth >= 640 ? 2 : 1)
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