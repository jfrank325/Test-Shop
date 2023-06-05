<script setup lang='ts'>
defineProps(['isStatic'])
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
    <div>
        <ul :class="isStatic ? 'flex-row justify-between' : 'flex-col'" class="pl-4 mt-2 flex text-xl ">
            <li v-for="mainCategory of mainCategories">
                <NavigationMenuItem :mainCategory="mainCategory" />
            </li>
        </ul>
    </div>
</template>

<style scoped></style>