<template>
    <section class="w-full bg-[#282828] py-10 lg:py-24">
        <div class="px-5 mx-auto lg:px-9 md:max-w-[83.5rem] w-full flex flex-col gap-8">
            <h2 class="appear-up font-wide font-medium text-white lg:text-4xl text-3xl leading-none uppercase">Наши кейсы</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                <NuxtLink v-for="(item, i) in cases" :key="i" :to="item.link" class="appear-up relative rounded-3xl overflow-hidden bg-[#3f454e] card">
                    <div class="w-full h-auto overflow-hidden rounded-3xl">
                        <img :src="item.img" class="w-full h-auto object-cover rounded-3xl card-scale">
                    </div>
                    
                    <div class="px-6 pt-4 pb-6 w-full h-[5.75rem]">
                        <div  class="flex w-full justify-between gap-4">
                            <span class="font-wide font-medium md:text-xl text-sm leading-6 text-white">{{ item.text }}</span>
                            <div class="py-4 px-[1.1875rem] w-fit">
                                <ChevronRight />
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </div>
            <NuxtLink to="/cases" class="group relative overflow-hidden appear-up font-wide font-medium text-xl leading-6 text-brand w-fit mx-auto">
              Все кейсы
              <div class="divider absolute bottom-0 right-full h-[0.0625rem] w-full bg-brand transition-all duration-300 ease-out group-hover:right-0"></div>
            </NuxtLink>
        </div>
    </section>
</template>

<script setup>
import ChevronRight from './icons/ChevronRight.vue';
import { onMounted, onBeforeUnmount, nextTick } from 'vue';
import gsap from 'gsap';

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

onMounted(async () => {
  await nextTick();
  initAnimations();
});

onBeforeUnmount(() => {
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
]
</script>