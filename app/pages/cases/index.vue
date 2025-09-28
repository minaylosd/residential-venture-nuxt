<template>
    <div class="w-full py-24 flex flex-col gap-24">
        <section class="px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full">
            <div class="flex items-center gap-8 mb-8">
                <NuxtLink to="/blog"
                    class="rounded-full cursor-pointer flex items-center justify-center bg-tertiary w-16 h-16">
                    <Arrow />
                </NuxtLink>
                <h1 class="font-wide font-medium text-txt text-4xl leading-none uppercase">
                    Кейсы
                </h1>
            </div>
            <div class="grid grid-cols-2 gap-8 w-full">
                <div v-for="(item, i) in cases" :key="i" class="relative rounded-3xl overflow-hidden bg-tertiary">
                    <img :src="item.img" class="w-full h-auto object-cover rounded-3xl">
                    <div class="px-6 pt-4 pb-6 w-full h-[92px]">
                        <NuxtLink :to="item.link" class="flex w-full justify-between gap-4">
                            <span class="font-wide font-medium text-xl leading-6 text-txt">{{ item.text }}</span>
                            <div class="py-4 px-[19px] w-fit">
                                <ChevronRight :color="'#1d2023'" />
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
        <SubscriptionForm />
    </div>
</template>

<script setup>
import Arrow from "~/components/icons/Arrow.vue";
import SubscriptionForm from "~/components/SubscriptionForm.vue";
import ChevronRight from "~/components/icons/ChevronRight.vue";

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