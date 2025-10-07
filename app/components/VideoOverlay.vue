<template>
    <div @click.self="props.close"
        class="fixed inset-0 w-full h-full z-50 bg-black/15 backdrop-blur-sm flex flex-col justify-center gap-5 px-5 py-10 lg:px-9 lg:py-25">
        <div class="col-span-2 col-start-2 bg-white lg:p-10 p-4 flex flex-col gap-6 w-full h-fit rounded-3xl md:max-w-[79rem] mx-auto">
            <div class="flex justify-end items-start">
                <Close @click="props.close" />
            </div>
            <video :src="props.videoSrc" controls
                class="w-full h-auto object-cover"></video>
        </div>
    </div>
</template>

<script setup>
import Close from './icons/Close.vue';


const props = defineProps({
    close: Function,
    videoSrc: String
});

console.log(props.videoSrc)
</script>