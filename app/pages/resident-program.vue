<template>
    <div class="flex flex-col lg:gap-24 gap-10 lg:pb-24 pb-10">
        <section
            class="relative overflow-hidden flex flex-col w-full min-h-svh lg:min-h-[656px]">
            <img class="absolute inset-0 object-cover w-full h-full" src="/bggrad.png" alt="">
            <div class="px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full lg:py-24 py-10 grid lg:grid-cols-2 grid-cols-1">
                <h1
                    class="appear-up relative z-10 font-wide font-medium text-white lg:text-[56px] text-3xl leading-none uppercase mb-4 lg:col-span-2">
                    МАСШТАБИРУЙ СВОЙ B2C БИЗНЕС С ВОЗМОЖНОСТЯМИ МТС
                </h1>
                <div class="relative z-10 lg:mb-48">

                    <p class="appear-up font-normal leading-normal text-white text-2xl font-compact">
                        Получай инсайты о своей ЦА и протестируй новые маркетинговые гипотезы
                    </p>
                </div>

                <div class="lg:row-span-2 relative w-full h-full">
                    <img class="lg:absolute lg:top-1/2 lg:right-0 lg:-translate-y-1/2 w-full object-cover" src="/rocket.png">
                </div>

                <NuxtLink to="/form" target="_blank"
                    class="appear-up font-wide font-bold text-white text-xs uppercase py-[26px] px-[92px] rounded-[20px] bg-brand tracking-[0.05em] lg:w-fit w-full flex justify-center relative z-10">
                    Подать заявку
                </NuxtLink>
            </div>
        </section>

        <section class="px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full">
            <h2 class="appear-up font-wide font-medium text-txt lg:text-4xl text-3xl leading-none uppercase mb-8">Что даем</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 w-full">
                <div v-for="(item, i) in features" :key="i"
                    class="appear-up relative rounded-3xl bg-tertiary flex flex-col gap-12 w-full h-full p-6">
                    <img :src="item.icon" class="w-16 h-16 object-cover">
                    <div>
                        <h3 class="font-wide font-medium text-txt text-xl leading-7 mb-4">{{ item.heading }}</h3>
                        <p class="text-sm font-normal font-compact text-greytxt">{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full">
            <h2 class="appear-up font-wide font-medium text-txt lg:text-4xl text-3xl leading-none uppercase mb-8">Требования</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 w-full">
                <div v-for="(item, i) in requirements" :key="i"
                    class="appear-up rounded-3xl bg-tertiary flex flex-col gap-12 w-full p-6 overflow-hidden relative h-[420px]">

                    <div>
                        <h3 class="font-wide font-medium text-txt text-[32px] leading-9 mb-4">{{ item.heading }}</h3>
                        <p class="text-sm font-normal font-compact text-greytxt">{{ item.text }}</p>
                    </div>

                    <img :src="item.img" class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-24">
                </div>
            </div>
        </section>

        <AccordeonCard />

        <section class="px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full flex flex-col gap-8 items-center">
            <p class="appear-up font-wide font-medium text-txt lg:text-[72px] text-xl leading-none uppercase relative z-10 text-center">Начни
                коммерческое сотрудничество с МТС</p>

            <NuxtLink
                class="appear-up font-wide font-bold text-white text-xs uppercase py-[26px] px-[92px] rounded-[20px] bg-brand tracking-[0.05em] w-fit"
                to="/form">
                Подать заявку
            </NuxtLink>
        </section>
    </div>
</template>

<script setup>
import AccordeonCard from '~/components/AccordeonCard.vue';
import { onMounted, onBeforeUnmount } from 'vue'
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
        heading: "Регулярный отчет с маркетинговыми гипотезами",
        text: "Откроют новые возможности для роста бизнеса",
        icon: "/resident-icon-1.svg"
    },
    {
        heading: "Приоритетный доступ в наш Венчурный клуб",
        text: "Качественный нетворк профильной аудитории",
        icon: "/resident-icon-2.svg"
    },
    {
        heading: "Прямой выход на бизнес МТС",
        text: "Поможем упаковать питчи и организуем коммуникацию",
        icon: "/resident-icon-3.svg"
    },
    {
        heading: "Возможность получить инвестиции",
        text: "В случае доказанной синергии с МТС",
        icon: "/resident-icon-4.svg"
    },
    {
        heading: "Возможность получить инвестиции",
        text: "В случае доказанной синергии с МТС",
        icon: "/resident-icon-5.svg"
    },
    {
        heading: "Потенциальный выход на пилот",
        text: "Возможность вместе с бизнесом МТС проверить синергии",
        icon: "/resident-icon-6.svg"
    }
]

const requirements = [
    {
        heading: "B2C продукт/сервис",
        text: "Вы работаете в РФ с физическими клиентами",
        img: "/resident-img-1.png"
    },
    {
        heading: "Нетоксичный бизнес",
        text: "Ваш продукт не наносит вред здоровью и не эксплуатирует слабости человека",
        img: "/resident-img-2.png"
    },
    {
        heading: "Перспективный рынок",
        text: "Вы видите перспективы роста вашей выручки 1+ млрд ₽",
        img: "/resident-img-3.png"
    },
]
</script>