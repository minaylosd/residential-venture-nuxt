<template>
    <div class="flex flex-col gap-24 pb-24">
        <BlogNewsComp :heading="'Новости'" />
        <ArticlesAnaliticsSlider :articles="news" />
        <CasesGrid />
        <SubscriptionForm />
    </div>
</template>

<script setup>
import BlogNewsComp from '~/components/BlogNewsComp.vue';
import ArticlesAnaliticsSlider from '~/components/ArticlesAnaliticsSlider.vue';
import CasesGrid from '~/components/CasesGrid.vue';
import SubscriptionForm from '~/components/SubscriptionForm.vue';

const news = [
    {
        text: "Второй сезон подкаста «От сида до экзита» – максимум пользы, минимум воды",
        date: "21 сентября",
        img: "/news-1.jpg",
        link: "/news/1"
    },
    {
        text: "Стартапы vs Корпорации: как не потеряться в экосистеме",
        date: "21 сентября",
        img: "/news-2.jpg",
        link: "/news/2"
    },
    {
        text: "От идеи к чат-боту: как стартап GOSTИ меняет путешествия с помощью искусственного интеллекта",
        date: "21 сентября",
        img: "/news-3.jpg",
        link: "/news/3"
    },
]
</script>