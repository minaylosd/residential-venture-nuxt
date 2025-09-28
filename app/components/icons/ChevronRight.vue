<template>
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" :class="color ? `text-${color}` : 'text-white'" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L5.58579 5.58579C6.36683 6.36683 6.36684 7.63316 5.58579 8.41421L1 13" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" />
    </svg>
</template>

<script setup>
const props = defineProps({
    color: String
});
</script>