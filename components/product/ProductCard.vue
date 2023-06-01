<script setup lang='ts'>
import Product from '~/types/product'
import formatPrice from '@/utils/formatPrice'
// import { useNavigatorLanguage } from '@vueuse/core'
const props = defineProps<{ product: Product }>();
const { id, category, description, image, title, price } = props.product;
const path = `${category}/${id.toString()}`
// const { language } = useNavigatorLanguage();
const { addToCart } = useCart();
const formattedPrice = price && formatPrice(price)
</script>

<template>
    <NuxtLink :to="path" class="sm:max-w[90vw] block my-6 mx-a md:max-w-xs">
        <article class="flex flex-col text-center items-center">
            <img :src="image" width="250" class="pb-3" />
            <h3 class="font-bold pb-3">{{ title }}</h3>
            <p class="pb-3">{{ description }}</p>
            <data :value="price" class="font-bold text-xl">{{ formattedPrice }}</data>
            <button @click.prevent="addToCart(product)" class="w-fit bg-red-400 rounded px-2 my-2">Add To Cart</button>
        </article>
    </NuxtLink>
</template>

<style scoped></style>