<template>
    <div class="w-full py-10 lg:py-24 flex flex-col gap-10 lg:gap-24">
        <section class="px-5 mx-auto lg:px-9 md:max-w-[83.5rem] w-full">
            <div class="flex items-center gap-8 mb-8">
                <NuxtLink to="/blog"
                    class="appear-up rounded-full cursor-pointer flex items-center justify-center bg-tertiary w-16 h-16">
                    <Arrow />
                </NuxtLink>
                <h1 class="appear-up font-wide font-medium text-txt lg:text-4xl text-3xl leading-none uppercase">
                    Кейсы
                </h1>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                <NuxtLink v-for="(item, i) in cases" :key="i" :to="item.link"
                    class="appear-up relative rounded-3xl overflow-hidden bg-tertiary card">
                    <div class="w-full h-auto overflow-hidden rounded-3xl">
                        <img :src="item.img" class="w-full h-auto object-cover rounded-3xl card-scale">
                    </div>
                    <div class="px-6 pt-4 pb-6 w-full h-[5.75rem]">
                        <div class="flex w-full justify-between gap-4">
                            <span class="font-wide font-medium md:text-xl text-sm leading-6 text-txt">{{ item.text
                                }}</span>
                            <div class="py-4 px-[1.1875rem] w-fit">
                                <ChevronRight :color="'#1d2023'" />
                            </div>
                        </div>
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
import ChevronRight from "~/components/icons/ChevronRight.vue";
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import { gsap } from "gsap";

function initAnimations() {
    const cards = document.querySelectorAll(".card");
    gsap.fromTo(cards, { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: "power4.out", stagger: 0.1, duration: 2 });

    cards.forEach((card) => {
        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);
    });
}

function handleMouseEnter(e) {
    const el = e.currentTarget.querySelectorAll(".card-scale");
    gsap.to(el, { scale: 1.07, ease: "power4.out", duration: 1.2 });
}

function handleMouseLeave(e) {
    const el = e.currentTarget.querySelectorAll(".card-scale");
    gsap.to(el, { scale: 1, ease: "power4.out", duration: 1.2 });
}

function removeListeners() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
    });
}

let observer = null;

onMounted(async () => {
    await nextTick();
    initAnimations();
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
    removeListeners();
});

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