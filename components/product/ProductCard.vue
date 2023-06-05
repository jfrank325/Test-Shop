<script setup lang='ts'>
import Product from '~/types/product'
import { Rating } from '~/types/product'
// import { useNavigatorLanguage } from '@vueuse/core'
const props = defineProps<{ product: Product }>();
const rating:Rating | any = props.product.rating
const { id, category, description, image, title, price } = props.product;
const path = `${category}/${id.toString()}`
// const { language } = useNavigatorLanguage();
const formattedPrice = price && formatPrice(price)
</script>

<template>
    <NuxtLink :to="path" class="sm:max-w[90vw] block my-6 mx-a md:max-w-xs">
        <article class="flex flex-col text-center items-center">
            <img :src="image" width="100" class="pb-3 max-h[80vw] w-auto max-w[80vw] md:max-w-[15rem]" />
            <h3 class="font-bold pb-3">{{ title }}</h3>
            <p class="pb-3">{{ description }}</p>
            <ProductRating :rating="rating"/>
            <data :value="price" class="font-bold text-xl">{{ formattedPrice }}</data>
            <ProductAddToCartButton :product="product"/>
        </article>
    </NuxtLink>
</template>

<style scoped></style>