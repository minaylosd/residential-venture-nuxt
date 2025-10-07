<template>
    <div class="flex flex-col gap-10 pb-10 lg:gap-24 lg:pb-24">
        <section class="relative overflow-hidden flex flex-col w-full min-h-svh lg:min-h-[656px]">
            <img class="absolute inset-0 object-cover w-full h-full" src="/bggrad.png" alt="">
            <div
                class="px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full lg:py-24 py-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-y-48 gap-y-10">
                <div class="relative z-10">
                    <h1
                        class="appear-up font-wide font-medium text-white lg:text-[56px] text-4xl leading-none uppercase mb-4">
                        РАЗВИВАЙ СВОЙ
                        БИЗНЕС С МТС</h1>
                    <p class="appear-up font-normal leading-normal text-white lg:text-2xl text-lg font-compact">
                        Получи инвестиции и заключи контракт с крупной корпорацией
                    </p>
                </div>

                <div class="row-span-2 relative w-full h-full">
                    <img class="lg:absolute lg:top-1/2 lg:right-0 lg:-translate-y-1/2 w-full object-cover"
                        src="/mainPoster.png">
                </div>

                <NuxtLink to="/form" target="_blank"
                    class="appear-up font-wide font-bold text-white text-xs uppercase py-[26px] px-[92px] rounded-[20px] bg-brand tracking-[0.05em] lg:w-fit w-full relative z-10 flex justify-center">
                    Подать заявку
                </NuxtLink>
            </div>
        </section>

        <section class="px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full">
            <h2 class="appear-up font-wide font-medium text-txt text-4xl leading-none uppercase mb-8">Программы</h2>
            <div class="flex flex-col lg:flex-row items-center gap-8 w-full">
                <NuxtLink v-for="(link, i) in programLinks" :key="i" :to="link.link" target="_blank"
                    class="appear-up relative rounded-3xl bg-tertiary flex flex-col justify-between w-full h-[244px] p-6 overflow-hidden">
                    <div class="relative z-10">
                        <h3 class="font-wide font-medium text-txt text-[32px] leading-8">{{ link.heading }}</h3>
                        <p class="text-sm font-normal font-compact text-greytxt">{{ link.paragraph }}</p>
                    </div>

                    <div class="bg-brand cursor-pointer py-4 px-[19px] rounded-lg w-fit">
                        <ChevronRight />
                    </div>

                    <img :src="link.img" class="absolute right-9 -bottom-16 w-[218px] object-cover">
                </NuxtLink>
            </div>
        </section>

        <section ref="wrapper" class="w-full max-w-[1336px] px-5 lg:px-9 mx-auto">
            <h2 class="appear-up font-wide font-medium text-txt text-4xl leading-none uppercase mb-8">
                Наши цифры</h2>
            <div class="flex w-full md:h-[395px] relative justify-center">
                <div ref="swiperRef"
                    class="flex flex-col md:flex-row items-center md:gap-24 gap-10 md:absolute md:top-0 md:left-0">
                    <div v-for="(number, i) in numbers" :key="i" :class="[ i == 0 ? 'md:mr-20' : '', 'appear-up relative mb-40']">
                        <img :src="number.img"
                            class="lg:w-[245px] min-w-[245px] w-full object-cover aspect-square rounded-3xl -mb-10" alt="">
                        <div class="absolute left-0 bottom-2 translate-y-full">
                            <p class="flex flex-col gap-4 font-compact font-normal text-txt text-xl leading-none">
                                <span class="font-wide font-medium text-brand text-[128px] leading-none">{{ number.value
                                    }}</span>
                                <span>{{ number.text }}</span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <CasesGrid />
        <BlogNewsComp :heading="'Блог'" />

        <div class="w-full max-w-[1336px] px-5 lg:px-9 mx-auto">
            <div class="flex w-full relative">
                <a href="/"
                    class="px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full lg:rounded-[48px] rounded-2xl relative overflow-hidden lg:py-[55px] py-6">
                    <img src="/bottom-poster-grad.jpg"
                        class="absolute w-full h-full top-0 left-0 lg:rounded-[48px] rounded-2xl object-cover" alt="">
                    <p
                        class="font-wide font-medium text-white lg:text-[72px] text-xl leading-none uppercase relative z-10">
                        Больше новостей
                        в нашем телеграм</p>
                    <img src="/bottom-poster.png"
                        class="absolute top-1/2 -right-8 lg:right-0 -translate-y-1/2 lg:w-[372px] w-[180px] aspect-square object-cover"
                        alt="">
                </a>
            </div>
        </div>

    </div>
</template>

<script setup>
import ChevronRight from '~/components/icons/ChevronRight.vue';
import CasesGrid from '~/components/CasesGrid.vue';
import BlogNewsComp from '~/components/BlogNewsComp.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

let observer = null;
const swiperRef = ref(null);
const wrapper = ref(null);

onMounted(() => {
    // регистрируем ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // твой IntersectionObserver для .appear-up
    const sections = document.querySelectorAll("section");
    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const appearEls = entry.target.querySelectorAll(".appear-up");

                if (appearEls.length > 0) {
                    gsap.fromTo(
                        appearEls,
                        { opacity: 0, y: 100 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            stagger: 0.07,
                            ease: "power2.out",
                            clearProps: "transform",
                        }
                    );
                }

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
    });

    sections.forEach((section) => observer.observe(section));

    if (swiperRef.value && wrapper.value) {
        ScrollTrigger.matchMedia({
            "(min-width: 640px)": () => {
                const totalWidth =
                    swiperRef.value.scrollWidth - wrapper.value.offsetWidth;

                gsap.to(swiperRef.value, {
                    x: () => -totalWidth,
                    ease: "none",
                    scrollTrigger: {
                        trigger: wrapper.value,
                        start: "top-=72 top",
                        end: () => `+=${totalWidth}`,
                        pin: true,
                        pinSpacing: true,
                        scrub: true,
                        anticipatePin: 1,
                    },
                });
            }
        })
    }
});

onBeforeUnmount(() => {
    if (observer) observer.disconnect();
    ScrollTrigger.getAll().forEach((st) => st.kill());
});

const programLinks = [
    {
        heading: "Резидентская программа",
        paragraph: "Маркетинговый буст для b2c стартапов и продуктов",
        img: "/program-img-1.png",
        link: "/resident-program"
    },
    {
        heading: "Венчурный клуб",
        paragraph: "Место встречи бизнес-идей, инновационных инсайтов и нетворка",
        img: "/program-img-2.png",
        link: "/resident-program"
    }
]

const numbers = [
    {
        value: "8,5К",
        text: "стартапов в воронке",
        img: "Rectangle 39973.jpg",
    },
    {
        value: 26,
        text: "стартапов перешли в масташбирование",
        img: "Rectangle 39974.jpg",
    },
    {
        value: 19,
        text: "проектов запустили продукты на 5G",
        img: "Rectangle 39975.jpg",
    },
    {
        value: 9,
        text: "Венчурных сделок",
        img: "Rectangle 39976.jpg",
    },
    {
        value: 85,
        text: "решений протестировано",
        img: "Rectangle 39976.jpg",
    }
]
</script>