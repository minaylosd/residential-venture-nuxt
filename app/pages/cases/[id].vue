<template>
    <section class="relative overflow-hidden flex flex-col w-full">
        <img class="object-cover w-full h-full" src="/article-poster.jpg" alt="">
        <div class="absolute inset-0 bg-[#5a0206]/75"></div>
        <div class="px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
            <div class="flex items-center gap-8 mb-8">
                <NuxtLink to="/cases"
                    class="rounded-full cursor-pointer flex items-center justify-center bg-tertiary w-16 h-16 min-h-16 min-w-16">
                    <Arrow />
                </NuxtLink>
                <h1 class="font-wide font-medium text-white text-4xl leading-none">
                    Как работа со стартапами на ранних стадиях помогает создавать инновации: взгляд MTS StartUp Hub
                </h1>
            </div>
        </div>
    </section>
    <section class="px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full flex flex-col gap-24 py-24">
        <p class="font-wide font-medium text-greytxt text-xl leading-6">
            До 25% бронирований в отелях так и не доходят до заезда гостей. А это значит — недополученная выручка,
            пустующие номера и потерянные бюджеты. Стартап Data.Forecast, победитель MTS Travel Accelerator, решил
            помочь индустрии справиться с этой проблемой. Команда разработала модель, которая предсказывает вероятность
            отмены ещё до того, как гость её оформит.
        </p>

        <div>
            <h2 class="font-wide font-medium text-txt text-[32px] leading-9 mb-8">Подробнее про Data.Forecast</h2>
            <p class="font-compact font-normal text-17 leading-6 text-greytxt">Data.Forecast — первая российская
                DeepTech-система предиктивной аналитики для гостиничного бизнеса. С помощью самообучающихся алгоритмов
                она анализирует более 2 600 параметров, включая динамику бронирований, поведение пользователей на сайте,
                маркетинговые кампании, погодные условия и многое другое. Всё это позволяет системе с высокой точностью
                прогнозировать спрос, вероятность заезда, а также рекомендовать, как корректировать цены или когда
                запускать маркетинговую активность. </p>
        </div>

        <div>
            <h2 class="font-wide font-medium text-txt text-[32px] leading-9 mb-8">Цель пилота</h2>
            <p class="font-compact font-normal text-17 leading-6 text-greytxt">Задача пилота – протестировать, как
                модель работает на реальных данных крупнейшего российского отельного консолидатора Bronevik.com .
                Основной фокус – это вероятность отмены бронирования. Датасет включал более 914 тыс. заказов, а целью
                модели – точно определить, какие заказы могут быть отменены и помочь отелям подготовить инструменты для
                работы с такими рисками.</p>
        </div>

        <div>
            <h2 class="font-wide font-medium text-txt text-[32px] leading-9 mb-8">Как строилась модель</h2>
            <p class="font-compact font-normal text-17 leading-6 text-greytxt">Каждое бронирование анализировалось
                отдельно, с учётом временных ограничений: алгоритм не получал доступ к информации из будущего. Модель
                проходила валидацию на «скользящих окнах», чтобы избежать переобучения. Были отобраны признаки, не
                дающие утечек, но при этом имеющие влияние на результат. Для оценки вклада каждого параметра
                использовались оценки Шэпли и другие методы интерпретации моделей.</p>
        </div>

        <div>
            <h2 class="font-wide font-medium text-txt text-[32px] leading-9 mb-8">Что показали результаты</h2>
            <p class="font-compact font-normal text-17 leading-6 text-greytxt">AUC-метрика превысила 0.75 – это хороший
                показатель качества для задач ранжирования по скоринговому баллу вероятности заезда с учетом
                ограниченного пилотного датасета (период анализа охватывал 6 месяцев и не учитывал тип отеля, географию
                и ряд других данных). Особенно интересным оказался сегмент бронирований со скорингом от 0.65 до 0.8 – он
                составляет всего 12,7% от общего объема, но содержит 29% всех отмен. Работа с этим сегментом способна
                существенно снизить потери бизнеса. Например, за счет использования опережающих инструментов (отправка
                автоматической ссылки на предоплату, персонифицированная email-коммуникация, чат-бот, комплименты от
                отелей).</p>
        </div>

        <div>
            <img src="/article-image.jpg" class="w-full h-auto object-cover rounded-[48px] mb-8" />
            <button
                class="py-[18px] px-[108px] bg-txt font-wide font-bold text-xs text-white h-fit rounded-2xl uppercase tracking-[0.05em]">Поделиться</button>
        </div>
    </section>
    <SubscriptionForm />
    <div class="flex items-center gap-8 px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full py-24">
        <NuxtLink :to="prevId ? `/cases/${prevId}` : '#'" class="flex items-center gap-8"
            :class="!prevId && 'pointer-events-none'">
            <div
                class="rounded-full cursor-pointer flex items-center justify-center bg-tertiary w-16 h-16 min-h-16 min-w-16">
                <Arrow />
            </div>
            <span class="font-wide font-medium text-txt text-[32px] leading-9 transition-opacity duration-300"
                :class="!prevId && 'opacity-25'">
                Предыдущая статья
            </span>
        </NuxtLink>

        <NuxtLink :to="`/cases/${nextId}`" class="flex items-center gap-8">
            <span
                class="font-wide font-medium text-txt text-[32px] leading-9 hover:text-brand transition-colors duration-500 ease-out">
                Следующая статья
            </span>
            <div
                class="rounded-full cursor-pointer flex items-center justify-center bg-tertiary w-16 h-16 min-h-16 min-w-16">
                <Arrow class="rotate-180" />
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from '#imports'

import Arrow from '~/components/icons/Arrow.vue'
import SubscriptionForm from '~/components/SubscriptionForm.vue'

const route = useRoute()
const currentId = computed(() => Number(route.params.id))

const prevId = computed(() => (currentId.value > 1 ? currentId.value - 1 : null))
const nextId = computed(() => currentId.value + 1)
</script>