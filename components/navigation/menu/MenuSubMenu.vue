<script setup lang='ts'>
const categoryData = await fetchCategories();
const props = defineProps(['isOpenSubMenu'])
</script>

<template>
    <TransitionHorizontal v-if="isOpenSubMenu">
        <div>
            <ul class="pl-4 mt-2 flex text-2xl flex-col">
                <NuxtLink :to="`/products/${category}`"
                          v-for="category in categoryData"
                          class="font-bold text-base uppercase cursor-pointer hover:text-gray-700 transition-all duration-200 my-2">
                    {{ category }}
                </NuxtLink>
            </ul>
        </div>
    </TransitionHorizontal>
</template>

<style scoped></style>