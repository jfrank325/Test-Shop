<script setup lang='ts'>
import Product from '~/types/product'
import { Rating } from '~/types/product'
const route = useRoute();
const params: [] | any = route.params
const { id } = params;
const product: Product = await fetchProduct(id);
const rating:Rating | any = unref(product).rating
const { title, description, image, price } = unref(product)
const formattedPrice = price && formatPrice(price)
</script>

<template>
    <main class="flex flex-col items-center text-center">
        <img :src="image"
             :alt="`Image of ${title}`"
             width="250"
             class="pb-3 max-h[80vw] w-auto max-w[80vw] mt-3">
        <h1 class="font-bold pb-4 text-2xl md:text-4xl">{{ title }}</h1>
        <p class="pb-2">{{ description }}</p>
        <ProductRating :rating="rating"/>
        <data :value="price" class="font-bold text-xl">{{ formattedPrice }}</data>
        <ProductAddToCartButton :product="product" :icon="false"/>
    </main>
</template>

<style scoped></style>