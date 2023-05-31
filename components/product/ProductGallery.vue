<script setup lang='ts'>
import Product from '~/types/product'
const props = defineProps<{ products: Product[] }>();
</script>

<template>
    <div>
        <ul class="flex flex-col md:flex-row">
            <li class="w-fit mx-auto" v-for="product of products">
                <ProductCard :product="product"></ProductCard>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>