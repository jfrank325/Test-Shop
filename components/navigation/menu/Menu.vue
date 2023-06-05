<script setup lang="ts">
defineProps<{ isStatic: boolean }>();
const { isOpen } = useMenu();
const categoryData = await fetchCategories();
const mainCategories = [
    {
        name: 'Products',
        uri: ''
    },
    {
        name: 'Cart',
        uri: '/checkout/cart'
    },
    {
        name: 'About',
        uri: '/about'
    },
]
</script>

<template>
    <TransitionHorizontal class="z-10">
        <aside v-if="isOpen"
               class="bg-zinc-800 text-white w-screen pl-3 pt-3 absolute h-screen">
            <NavigationMenuMainContent :isStatic="false" />
        </aside>
    </TransitionHorizontal>
</template>

<style scoped>
.slide-vertical-enter-active,
.slide-vertical-leave-active {
    transition: all 0.3s ease-out;
}

.slide-vertical-enter-from,
.slide-vertical-leave-to {
    transform: translateX(-100%);
}
</style>