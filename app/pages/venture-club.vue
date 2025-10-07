<template>
    <div class="flex flex-col lg:gap-24 gap-10 lg:pb-24 pb-10">
        <section class="relative overflow-hidden flex flex-col w-full">
            <img class="absolute inset-0 object-cover w-full h-full" src="/venture-grad.png" alt="">
            <div
                class="px-5 mx-auto lg:px-9 md:max-w-[83.5rem] py-24 lg:py-0 w-full grid lg:grid-cols-2 grid-cols-1 items-center">

                <div class="relative z-20">
                    <h1
                        class="relative z-10 font-wide font-medium text-white lg:text-[3.5rem] text-4xl leading-none uppercase mb-4 col-span-2 appear-up">
                        Венчурный клуб
                    </h1>
                    <p class="font-normal leading-normal text-white text-2xl font-compact appear-up">
                        Закрытое сообщество ключевых игроков цифрового рынка: инвесторов, бизнес-ангелов, основателей
                        технологических компаний и представителей ведущих корпораций.
                    </p>
                </div>
                <img class="w-full h-full object-cover lg:relative absolute z-10 -right-20" src="/venture-poster.png">
                <div class="absolute inset-0 bg-black/25 z-[11] block lg:hidden"></div>
            </div>
        </section>

        <section class="px-5 mx-auto lg:px-9 md:max-w-[83.5rem] w-full">
            <h2 class="font-wide font-medium text-txt lg:text-4xl text-3xl leading-none uppercase mb-8 appear-up">Что даем</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 w-full">
                <div v-for="(item, i) in features" :key="i"
                    class="appear-up relative rounded-3xl bg-tertiary flex flex-col gap-12 w-full h-full p-6">
                    <div
                        class="px-[0.4375rem] py-1.5 w-8 h-8 flex items-center- justify-center rounded-lg bg-brand font-compact font-bold text-sm text-white">
                        {{ '0' + (i + 1) }}</div>
                    <div>
                        <h3 class="font-wide font-medium text-txt text-2xl leading-7 mb-4">{{ item.heading }}</h3>
                        <p class="text-sm font-normal font-compact text-greytxt">{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="px-5 mx-auto lg:px-9 md:max-w-[83.5rem] w-full">
            <h2 class="appear-up font-wide font-medium text-txt lg:text-4xl text-3xl leading-none uppercase mb-8">Для кого</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 items-start gap-8 w-full">
                <div v-for="(item, i) in forWho" :key="i" @click="showVideo(item.videoSrc)"
                    class="appear-up relative rounded-3xl w-full overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center lg:gap-4 gap-0 bg-tertiary cursor-pointer">
                    <div class="flex flex-col gap-2 p-6 h-full order-1 md:order-0">
                        <h3 class="font-wide font-medium text-xl leading-6 text-txt">{{ item.heading }}</h3>
                        <p class="text-sm font-normal font-compact text-greytxt">{{ item.text }}</p>
                    </div>

                    <div class="flex items-center gap-4 order-0 md:order-1">
                        <img :src="item.media" class="object-cover rounded-3xl w-full aspect-[288/254]">
                    </div>
                </div>
            </div>
        </section>

        <section class="px-5 mx-auto lg:px-9 md:max-w-[83.5rem] w-full">
            <h2 class="appear-up font-wide font-medium text-txt lg:text-4xl text-3xl leading-none uppercase mb-8">Ценности для
                участников клуба</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 w-full">
                <div v-for="(item, i) in values" :key="i"
                    class="appear-up relative rounded-3xl bg-tertiary flex flex-col gap-12 w-full h-full p-6">
                    <img :src="item.icon" class="w-16 h-16 object-cover">
                    <div>
                        <h3 class="font-wide font-medium text-txt text-2xl leading-7">{{ item.txt }}</h3>
                    </div>
                </div>
            </div>
        </section>

        <ArticleCarousel />

        <section class="px-5 mx-auto lg:px-9 md:max-w-[83.5rem] w-full">
            <h2 class="appear-up font-wide font-medium text-txt lg:text-4xl text-3xl leading-none uppercase mb-8">Встречи клуба в
                неформальной обстановке</h2>
            <img @click="showVideo('https://customer-cb9bpih4mcvv374c.cloudflarestream.com/fe6a5825f75cdfe895b152294063eed6/downloads/default.mp4')"
                src="/video-placeholder.jpg"
                class="appear-up w-full h-auto object-cover lg:rounded-[3rem] rounded-3xl cursor-pointer">
        </section>

        <VideoOverlay v-if="isOverlayOpened" :close="closeOverlay" :videoSrc="videoSrc" />
    </div>
</template>

<script setup>
import ArticleCarousel from '~/components/ArticleCarousel.vue'
import VideoOverlay from '~/components/VideoOverlay.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from "gsap";

let observer = null;

onMounted(() => {
    const sections = document.querySelectorAll("section");

    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const appearEls = entry.target.querySelectorAll(".appear-up");

                if (appearEls.length > 0) {
                    gsap.fromTo(appearEls,
                        { opacity: 0, y: 100 },
                        { opacity: 1, y: 0, duration: 1, stagger: 0.07, ease: "power2.out", clearProps: "transform" }
                    );
                }

                // После анимации больше не нужно следить за этой секцией
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // секция считается видимой при 10% попадания
    });

    sections.forEach((section) => observer.observe(section));
});

onBeforeUnmount(() => {
    if (observer) {
        observer.disconnect();
    }
});

const features = [
    {
        heading: "Объединяем",
        text: "единомышленников, обладающих релевантным опытом и готовых открыто делиться своей экспертизой",
    },
    {
        heading: "Развиваем",
        text: "венчурное сообщество в условиях инкапсуляции российского рынка",
    },
    {
        heading: "Даем возможность ",
        text: "встретить людей со схожим мышлением, доступ к уникальному контенту и качественный нетворк",
    },
]

const forWho = [
    {
        heading: "Основателей и предпринимателей",
        text: "Денис Кутергин. Основатель YouDo",
        media: "/venture-1.png",
        videoSrc: "https://customer-cb9bpih4mcvv374c.cloudflarestream.com/83b4d34ba5d97ac5801a3b92f79300f3/downloads/default.mp4"
    },
    {
        heading: "Корпоративных инноваторов",
        text: "Александр Горбунов. Вице-президент по стратегии и развитию АФК «Система»",
        media: "/venture-2.png",
        videoSrc: "https://customer-cb9bpih4mcvv374c.cloudflarestream.com/3eb0a46587b784266cd19ca239267862/downloads/default.mp4"
    },
    {
        heading: "Венчурных инвесторов",
        text: "Дмитрий Калаев. Директор акселератора ФРИИ",
        media: "/venture-3.png",
        videoSrc: "https://customer-cb9bpih4mcvv374c.cloudflarestream.com/cb95b4393ace38f89b2ed3ae7cb5a450/downloads/default.mp4"
    },
    {
        heading: "Экспертов",
        text: "Антон Устименко. Партнёр Б1",
        media: "/venture-4.png",
        videoSrc: "https://customer-cb9bpih4mcvv374c.cloudflarestream.com/71dea8112aa8c5f7e1f495f8a9828310/downloads/default.mp4"
    },
]

const values = [
    {
        txt: "Инсайты и аналитика",
        icon: "/venture-icon-1.svg"
    },
    {
        txt: "Обмен знаниями и практиками",
        icon: "/venture-icon-2.svg"
    },
    {
        txt: "Инвестиции",
        icon: "/venture-icon-3.svg"
    },
    {
        txt: "Знакомства и партнерства",
        icon: "/venture-icon-4.svg"
    },
    {
        txt: "Изучение новых рынков",
        icon: "/venture-icon-5.svg"
    },
    {
        txt: "Unicorn Case Study",
        icon: "/venture-icon-6.svg"
    },
]

const isOverlayOpened = ref(false);
const videoSrc = ref(null);

const openOverlay = () => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    isOverlayOpened.value = true;
}

const closeOverlay = () => {
    const body = document.querySelector("body");
    body.style.overflow = "auto";
    isOverlayOpened.value = false;
    videoSrc.value = null;
}

const showVideo = (src) => {
    videoSrc.value = src;
    openOverlay();
}
</script>