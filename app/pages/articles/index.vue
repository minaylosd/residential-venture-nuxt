<template>
    <div class="w-full py-24 flex flex-col gap-24">
        <section class="px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full">
            <div class="flex items-center gap-8 mb-8">
                <NuxtLink to="/blog"
                    class="rounded-full cursor-pointer flex items-center justify-center bg-tertiary w-16 h-16">
                    <Arrow />
                </NuxtLink>
                <h1 class="font-wide font-medium text-txt text-4xl leading-none uppercase">
                    Статьи и аналитика
                </h1>
            </div>
            <div class="grid grid-cols grid-cols-3 gap-8 items-center">
                <NuxtLink v-for="(article, i) in articles" :key="i" :to="article.link"
                    class="w-full flex flex-col rounded-3xl overflow-hidden relative aspect-[400/288]">
                    <img :src="article.img" class="rounded-3xl w-full h-auto object-cover">
                    <div class="absolute bottom-0 left-0 w-full p-6 bg-tertiary h-36 rounded-3xl">
                        <h3 class="font-wide font-medium text-txt text-xl leading-6">{{ article.text }}</h3>
                    </div>
                </NuxtLink>
            </div>
        </section>

        <SubscriptionForm />
    </div>


</template>

<script setup>
import Arrow from "~/components/icons/Arrow.vue";
import SubscriptionForm from "~/components/SubscriptionForm.vue";

const articles = [
    {
        text: "Второй сезон подкаста «От сида до экзита» – максимум пользы, минимум воды",
        date: "21 сентября",
        img: "/news-1.jpg",
        link: "/articles/1"
    },
    {
        text: "Стартапы vs Корпорации: как не потеряться в экосистеме",
        date: "21 сентября",
        img: "/news-2.jpg",
        link: "/articles/2"
    },
    {
        text: "От идеи к чат-боту: как стартап GOSTИ меняет путешествия с помощью искусственного интеллекта",
        date: "21 сентября",
        img: "/news-3.jpg",
        link: "/articles/3"
    },
    {
        text: "Второй сезон подкаста «От сида до экзита» – максимум пользы, минимум воды",
        date: "21 сентября",
        img: "/news-1.jpg",
        link: "/articles/1"
    },
    {
        text: "Стартапы vs Корпорации: как не потеряться в экосистеме",
        date: "21 сентября",
        img: "/news-2.jpg",
        link: "/articles/2"
    },
    {
        text: "От идеи к чат-боту: как стартап GOSTИ меняет путешествия с помощью искусственного интеллекта",
        date: "21 сентября",
        img: "/news-3.jpg",
        link: "/articles/3"
    },
    {
        text: "Второй сезон подкаста «От сида до экзита» – максимум пользы, минимум воды",
        date: "21 сентября",
        img: "/news-1.jpg",
        link: "/articles/1"
    },
    {
        text: "Стартапы vs Корпорации: как не потеряться в экосистеме",
        date: "21 сентября",
        img: "/news-2.jpg",
        link: "/articles/2"
    },
    {
        text: "От идеи к чат-боту: как стартап GOSTИ меняет путешествия с помощью искусственного интеллекта",
        date: "21 сентября",
        img: "/news-3.jpg",
        link: "/articles/3"
    },
]
</script>