<script setup lang='ts'>
import { MainCategory } from '~/types/categories';
const props = defineProps<{ mainCategory: MainCategory }>();
const isOpenSubMenu = ref(true)
const openCategory = () => {
    isOpenSubMenu.value ? !isOpenSubMenu.value : isOpenSubMenu.value
}

</script>

<template>
<div>
    <NuxtLink v-if="mainCategory.uri" :to="mainCategory.uri">
                <p class="font-bold text-3xl uppercase my-6">{{ mainCategory.name }}</p>
    </NuxtLink>
    <div v-else class="">
        <p @click="openCategory" class="font-bold text-3xl uppercase my-6 cursor-pointer">{{ mainCategory.name }}</p>
            <NavigationMenuSubMenu :isOpenSubMenu="isOpenSubMenu"/>
    </div>
</div>
</template>

<style scoped>

</style>