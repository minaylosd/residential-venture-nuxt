<template>
    <div class="flex flex-col gap-24 pb-24">
        <section
            class="relative overflow-hidden flex flex-col w-full">
            <img class="absolute inset-0 object-cover w-full h-full" src="/venture-grad.png" alt="">
            <div class="px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full grid grid-cols-2 items-center">

                <div class="relative z-10">
                    <h1
                        class="relative z-10 font-wide font-medium text-white text-[56px] leading-none uppercase mb-4 col-span-2">
                        Венчурный клуб
                    </h1>
                    <p class="font-normal leading-normal text-white text-2xl font-compact">
                        Закрытое сообщество ключевых игроков цифрового рынка: инвесторов, бизнес-ангелов, основателей
                        технологических компаний и представителей ведущих корпораций.
                    </p>
                </div>
                <img class="w-full h-full object-cover relative z-10" src="/venture-poster.png">
            </div>
        </section>

        <section class="px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full">
            <h2 class="font-wide font-medium text-txt text-4xl leading-none uppercase mb-8">Что даем</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 w-full">
                <div v-for="(item, i) in features" :key="i"
                    class="relative rounded-3xl bg-tertiary flex flex-col gap-12 w-full h-full p-6">
                    <div
                        class="px-[7px] py-1.5 w-8 h-8 flex items-center- justify-center rounded-lg bg-brand font-compact font-bold text-sm text-white">
                        {{ '0' + (i + 1) }}</div>
                    <div>
                        <h3 class="font-wide font-medium text-txt text-2xl leading-7 mb-4">{{ item.heading }}</h3>
                        <p class="text-sm font-normal font-compact text-greytxt">{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full">
            <h2 class="font-wide font-medium text-txt text-4xl leading-none uppercase mb-8">Для кого</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 items-start gap-8 w-full">
                <div v-for="(item, i) in forWho" :key="i"
                    class="relative rounded-3xl w-full overflow-hidden grid grid-cols-2 items-center gap-4 bg-tertiary">
                    <div class="flex flex-col gap-2 p-6 h-full">
                        <h3 class="font-wide font-medium text-xl leading-6 text-txt">{{ item.heading }}</h3>
                        <p class="text-sm font-normal font-compact text-greytxt">{{ item.text }}</p>
                    </div>

                    <div class="flex items-center gap-4">
                        <img :src="item.media" class="object-cover rounded-3xl w-full aspect-[288/254]">
                    </div>
                </div>
            </div>
        </section>

        <section class="px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full">
            <h2 class="font-wide font-medium text-txt text-4xl leading-none uppercase mb-8">Ценности для участников клуба</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 w-full">
                <div v-for="(item, i) in values" :key="i"
                    class="relative rounded-3xl bg-tertiary flex flex-col gap-12 w-full h-full p-6">
                    <img :src="item.icon" class="w-16 h-16 object-cover">
                    <div>
                        <h3 class="font-wide font-medium text-txt text-2xl leading-7">{{ item.txt }}</h3>
                    </div>
                </div>
            </div>
        </section>

        <ArticleCarousel />

        <section class="px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full">
            <h2 class="font-wide font-medium text-txt text-4xl leading-none uppercase mb-8">Встречи клуба в неформальной обстановке</h2>
            <img src="/video-placeholder.jpg" class="w-full h-auto object-cover rounded-[48px]">
        </section>
    </div>
</template>

<script setup>
import ArticleCarousel from '~/components/ArticleCarousel.vue'
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
        media: "/venture-1.png"
    },
    {
        heading: "Корпоративных инноваторов",
        text: "Александр Горбунов. Вице-президент по стратегии и развитию АФК «Система»",
        media: "/venture-2.png"
    },
    {
        heading: "Венчурных инвесторов",
        text: "Дмитрий Калаев. Директор акселератора ФРИИ",
        media: "/venture-3.png"
    },
    {
        heading: "Экспертов",
        text: "Антон Устименко. Партнёр Б1",
        media: "/venture-4.png"
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
</script>