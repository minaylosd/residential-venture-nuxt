<template>
    <div class="flex flex-col lg:gap-24 gap-10 lg:pb-24 pb-10">
        <BlogNewsComp :heading="'Новости'" />
        <ArticlesAnaliticsSlider :articles="articles" />
        <CasesGrid />
        <SubscriptionForm />
    </div>
</template>

<script setup>
import BlogNewsComp from '~/components/BlogNewsComp.vue';
import ArticlesAnaliticsSlider from '~/components/ArticlesAnaliticsSlider.vue';
import CasesGrid from '~/components/CasesGrid.vue';
import SubscriptionForm from '~/components/SubscriptionForm.vue';
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
]
</script>