<template>
    <header class="fixed top-0 left-0 z-30 w-full bg-white lg:shadow-shadow py-3.5">
        <div class="flex items-center justify-between px-5 mx-auto lg:px-9 md:max-w-[1336px]">
            <div class="flex items-center gap-11">
                <NuxtLink class="flex items-center gap-2.5 font-compact text-xl leading-6 text-txt font-normal"
                    to="/">
                    <HeaderLogo />
                </NuxtLink>
                <div class="lg:flex hidden items-center gap-4">
                    <NuxtLink v-for="(link, i) in links" :key="i" class="font-compact font-medium text-txt text-sm"
                        :to="link.link">
                        {{ link.label }}
                    </NuxtLink>
                </div>
            </div>

            <div class="lg:flex hidden items-center gap-[46px]">
                <NuxtLink class="font-compact font-medium text-txt text-sm" to="/">
                    Eng
                </NuxtLink>
                <NuxtLink class="font-wide font-bold text-white text-xs uppercase py-[14px] px-[18px] rounded-2xl bg-brand" to="/">
                    Войти
                </NuxtLink>
            </div>
            <div class="block w-8 h-8 lg:hidden">
                <MenuBurger />
            </div>
        </div>
    </header>
</template>

<script setup>
import HeaderLogo from "./icons/HeaderLogo.vue";
import MenuBurger from "./icons/MenuBurger.vue";

const links = [
    {
        label: "Резидентская программа",
        link: "/resident-program"
    },
    {
        label: "Венчурный клуб",
        link: "/venture-club"
    },
    {
        label: "Блог",
        link: "/blog"
    },
]
</script>
