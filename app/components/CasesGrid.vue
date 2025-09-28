<template>
    <section class="w-full bg-[#282828] py-24">
        <div class="px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full flex flex-col gap-8">
            <h2 class="font-wide font-medium text-white text-4xl leading-none uppercase">Наши кейсы</h2>
            <div class="grid grid-cols-2 gap-8 w-full">
                <div v-for="(item, i) in cases" :key="i" class="relative rounded-3xl overflow-hidden bg-[#3f454e]">
                    <img :src="item.img" class="w-full h-auto object-cover rounded-3xl">

                    <div class="px-6 pt-4 pb-6 w-full h-[92px]">
                        <NuxtLink :to="item.link" class="flex w-full justify-between gap-4">
                            <span class="font-wide font-medium text-xl leading-6 text-white">{{ item.text }}</span>
                            <div class="py-4 px-[19px] w-fit">
                                <ChevronRight />
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <NuxtLink to="/cases" class="font-wide font-medium text-xl leading-6 text-brand w-fit mx-auto">Все кейсы</NuxtLink>
        </div>
    </section>
</template>

<script setup>
import ChevronRight from './icons/ChevronRight.vue';

const cases = [
    {
        text: "Предиктивная аналитика для гостиничного бизнеса: кейс Data.Forecast и Bronevik.com",
        img: "/blog-1.jpg",
        link: "/cases/1"
    },
    {
        text: "Выгодное вложение, или Зачем МТС Live приобрели Bartello",
        img: "/blog-2.jpg",
        link: "/cases/2"
    },
    {
        text: "Chattermill",
        img: "/blog-3.jpg",
        link: "/cases/3"
    },
    {
        text: "KonnektU",
        img: "/blog-4.jpg",
        link: "/cases/4"
    },
]
</script>