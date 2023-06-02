<script setup lang='ts'>
const headerText = ref('About YT')
const subHeaderText = ref('Our Roots')
</script>

<template>
    <div class="text-center mb-6">
        <h1 class="text-4xl md:text-6xl font-extrabold">{{ headerText }}</h1>
        <h2 class="text-2xl md:text-4xl font-bold">{{ subHeaderText }}</h2>
    </div>
</template>

<style scoped></style>