<template>
  <div class="flex flex-col min-h-lvh">
    <AppHeader />
    <main class="flex flex-col grow pt-15 lg:pt-[4.5rem] w-full overflow-hidden">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>