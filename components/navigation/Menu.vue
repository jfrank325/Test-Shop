<script setup lang="ts">
const props = defineProps<{ isStatic: boolean }>();
const { isOpen } = useMenu();
const categoryData = await fetchCategories();
</script>

<template>
    <aside v-if="isOpen || isStatic"
           :class="isStatic && 'flex justify-between relative bottom-0'">
        <div class="">
            <h2 class="font-bold text-xl uppercase">Products</h2>
            <ul class="pl-4 mt-2 flex flex-col">
                <NuxtLink :to="`/products/${category}`"
                          v-for="category in categoryData"
                          class="font-bold text-base uppercase cursor-pointer hover:text-gray-700 transition-all duration-200">
                    {{ category }}
                </NuxtLink>
            </ul>
        </div>
        <NuxtLink to='/checkout/cart'>
            <p class="font-bold text-xl uppercase">Cart</p>
        </NuxtLink>
        <NuxtLink to='/about'>
            <p class="font-bold text-xl uppercase">About</p>
        </NuxtLink>
    </aside>
</template>

<style scoped></style>