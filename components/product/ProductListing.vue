<script setup lang='ts'>
import Product from '~/types/product'
const route = useRoute();
const params: [] | any = route.params
const category = params.category
const uri = `https://fakestoreapi.com/products/category/${category}`
const { data } = await useFetch(uri)
// const products: Product[] | any = data;
const products:Product[] = await fetchProducts(category);
</script>

<template>
    <div>
        <h1 class="font-bold text-2xl text-center uppercase pb-6 bg-neutral-200">{{ $route.params.category }}</h1>
        <ProductGallery :products="products" />
    </div>
</template>

<style scoped></style>