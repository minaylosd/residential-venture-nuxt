<template>
    <section class="w-full">
        <div class="px-5 mx-auto lg:px-9 md:max-w-[83.5rem] w-full flex flex-col gap-8">
            <h2 class="appear-up font-wide font-medium text-txt lg:text-4xl text-3xl leading-none uppercase">{{ props.heading }}</h2>
            <div class="flex flex-col gap-8 w-full">
                <NuxtLink v-for="(item, i) in news" :key="i" :to="item.link" class="appear-up relative rounded-3xl w-full overflow-hidden flex items-center gap-4 pr-6 bg-tertiary">
                    <div class="flex items-center gap-4">
                       <img :src="item.img" class="object-cover rounded-3xl w-[18.25rem] h-[7.9375rem]"> 
                    </div>
                    
                    <div class="flex items-start justify-between w-full">
                        <div class="flex flex-col gap-4 max-w-[39.375rem]">
                            <h3 class="font-wide font-medium lg:text-xl text-sm lg:leading-6 text-txt">{{ item.text }}</h3>
                            <p class="text-sm font-normal font-compact text-greytxt hidden lg:block">{{ item.date }}</p>
                       </div>
                       <p class="py-2 px-4 bg-brand font-text font-normal text-sm text-white h-fit rounded-2xl hidden lg:block">Новости</p>
                    </div>
                    
                </NuxtLink>
            </div>
            <NuxtLink to="/news" class="group appear-up font-wide font-medium text-xl leading-6 text-brand w-fit mx-auto relative overflow-hidden">
                Все новости
                <div class="divider absolute bottom-0 right-full h-[0.0625rem] w-full bg-brand transition-all duration-300 ease-out group-hover:right-0"></div>
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