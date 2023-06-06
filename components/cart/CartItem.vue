<script setup lang='ts'>
import Product from '~/types/product'
const props = defineProps<{ product: Product }>();
const { addToCart, removeFromCart, reduceFromCart, cart } = useCart();
const currentCartItem = cart.items.find(product => product.id == props.product.id) || props.product
const { image, title, price } = currentCartItem;
const formattedPrice = price && formatPrice(price);
</script>

<template>
    <div class="flex items-center justify-between mx-6">
        <div class="">
            <img :src="image"
                 width="100"
                 class="pb-3" />
            <h3 class="font-semibold pb-3">{{ title }}</h3>
        </div>
        <div class="flex flex-col items-center">
            <data :value="price"
                  class="font-semibold">{{ formattedPrice }}</data>
            <div class="flex justify-between items-center mt-4 mb-2">
                <p class="font-semibold pr-2">{{ currentCartItem.quantity }}</p>
                <div class="flex flex-col">
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
            </div>
            <ProductAddToCartButton :product="product"
                                    :icon="true" />
        </div>
        <!-- <button @click="removeFromCart(currentCartItem)">Remove</button> -->
    </div>
</template>

<style scoped></style>