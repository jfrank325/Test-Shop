<script setup lang='ts'>
import Product from '~/types/product'
import formatPrice from '@/utils/formatPrice'
const props = defineProps<{ product: Product }>();
const { addToCart, removeFromCart, reduceFromCart, cart } = useCart();
const currentCartItem = cart.items.find(product => product.id == props.product.id) || props.product
const { image, title, price } = currentCartItem;
const formattedPrice = price && formatPrice(price);
watchEffect(() => console.log({currentCartItem}));
</script>

<template>
    <div class="flex items-center mx-6">
        <img :src="image"
             width="100"
             class="pb-3" />
        <h3 class="font-bold pb-3">{{ title }}</h3>
        <data :value="price"
              class="font-bold text-xl">{{ formattedPrice }}</data>
        <div class="flex flex-col">
            <span>{{ currentCartItem.quantity }}</span>
            <button @click="addToCart(currentCartItem)">
                <Icon name="mdi:plus"
                      color="#000"
                      size="25" />
            </button>
            <button @click="reduceFromCart(currentCartItem)">
                <Icon name="mdi:minus"
                      color="#000"
                      size="25" />
            </button>
    </div>
    <button @click="removeFromCart(currentCartItem)">Remove</button>
</div></template>

<style scoped></style>