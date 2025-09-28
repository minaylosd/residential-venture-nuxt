<template>
    <section class="w-full py-24">
        <div class="px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full flex flex-col gap-8">
            <h2 class="font-wide font-medium text-txt text-4xl leading-none uppercase">{{ props.heading }}</h2>
            <div class="flex flex-col gap-8 w-full">
                <NuxtLink v-for="(item, i) in news" :key="i" :to="item.link" class="relative rounded-3xl w-full overflow-hidden flex items-center gap-4 pr-6 bg-tertiary">
                    <div class="flex items-center gap-4">
                       <img :src="item.img" class="object-cover rounded-3xl w-[292px] h-[127px]"> 
                    </div>
                    
                    <div class="flex items-start justify-between w-full">
                        <div class="flex flex-col gap-4 max-w-[630px]">
                            <h3 class="font-wide font-medium text-xl leading-6 text-txt">{{ item.text }}</h3>
                            <p class="text-sm font-normal font-compact text-greytxt">{{ item.date }}</p>
                       </div>
                       <p class="py-2 px-4 bg-brand font-text font-normal text-sm text-white h-fit rounded-2xl">Новости</p>
                    </div>
                    
                </NuxtLink>
            </div>
            <NuxtLink to="/news" class="font-wide font-medium text-xl leading-6 text-brand w-fit mx-auto">
                Все новости
            </NuxtLink>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
  heading: String
});
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