<template>
    <section id="questions" class="px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full">
        <div class="pt-16 md:pt-25">
            <h2 class="appear-up mb-8 lg:text-4xl text-3xl font-medium leading-none text-darkgray font-wide uppercase">
                Вопрос-ответ
            </h2>
            <div class="flex flex-col gap-5 bg-[#fafafa] p-6 rounded-[48px]">
                <div v-for="(item, index) in faqItems" :key="index" :class="[
                    'appear-up flex flex-col items-start justify-between w-full overflow-hidden border-divider',
                    index < faqItems.length - 1 ? 'border-b' : '',
                ]">
                    <div class="flex items-start justify-between w-full h-auto transition-all duration-500 cursor-pointer"
                        @click="toggleAccordion(index)">
                        <div class="max-w-[80%] flex flex-col gap-2">
                            <h3 class="text-lg font-medium md:mb-3 md:text-xl text-txt font-wide">
                                {{ item.question }}
                            </h3>
                            <p :class="isOpen(index) ? 'opacity-100 h-auto pb-3' : 'opacity-0 h-0'
                                "
                                class="leading-6 transition-opacity duration-500 opacity-0 text-17 font-regular text-greytxt font-text">
                                {{ item.answer }}
                            </p>
                        </div>
                        <div :class="isOpen(index) ? 'rotate-180' : ''"
                            class="transition-transform duration-500 ease-in-out">
                            <img src="/chevron.svg" alt="" class="transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

const faqItems = [
    {
        question: "Что такое коммерческий пилот?",
        answer: "Любой член вашей команды может заполнить бриф.",
    },
    {
        question:
            "Кто финансирует пилотный проект?",
        answer:
            "Мы центр компетенций внутри МТС. Поэтому платить нам не нужно, только заполнить бриф.",
    },
    {
        question: "Каким требованиям должен соответствовать стартап, чтобы реализовать коммерческий пилот с МТС?",
        answer:
            "Встретимся, чтобы обсудить ваш кейс и дальнейшие шаги. Договоримся о сроках. Если будет нужно, попросим дополнительные материалы.",
    },
    {
        question: "Когда мы увидим результаты работы?",
        answer: "Разбор каждого кейса занимает от трёх дней до месяца.",
    },
    {
        question: "Как часто мы можем приходить за помощью?",
        answer: "Ограничений нет. Приходите каждый раз, когда нужна наша помощь.",
    },
];

const openIndex = ref(null);

const toggleAccordion = (index) => {
    openIndex.value = openIndex.value === index ? null : index;
};

const isOpen = (index) => {
    return openIndex.value === index;
};
</script>