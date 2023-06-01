<script setup lang='ts'>
const { cart } = useCart();
</script>

<template>
    <div>
        <ul>
            <li v-for="item in cart.items" :key="item.id">
                <CartItem :product="item" />
            </li>
        </ul>
    </div>
</template>

<style scoped></style>