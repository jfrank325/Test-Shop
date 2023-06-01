<script setup lang='ts'>
const route = useRoute();
const params: [] | any = route.params
const category = params.category

</script>

<template>
    <div>
        <h1 class="font-bold text-2xl text-center uppercase pb-6 bg-neutral-200">{{ category }}</h1>
        <ProductGallery :category="category" />
    </div>
</template>

<style scoped></style>