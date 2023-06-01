<script setup lang='ts'>
import Product from '~/types/product'
const route = useRoute();
const params: [] | any = route.params
const { id } = params;
const product:Product = await fetchProduct(id);
const formattedPrice = computed(() => product.price?.toLocaleString('USD', {
    style: 'currency', currency: 'USD', minimumFractionDigits: 2,
}))
</script>

<template>
    <main>
        <img :src="product.image"
             :alt="`Image of ${product.title}`">
        <h1>{{ product.title }}</h1>
        <p>{{ product.description }}</p>
        <data :value="product.price">{{ formattedPrice }}</data>
    </main>
</template>

<style scoped></style>