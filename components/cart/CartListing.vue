<script setup lang='ts'>
const { cart } = useCart();
</script>

<template>
    <div>
        <ul v-if="cart.items.length">
            <li v-for="item in cart.items" :key="item.id">
                <CartItem :product="item" />
            </li>
        </ul>
        <h2 v-else class="text-center text-4xl font-bold mt-6">Your Cart is Currently Empty</h2>
    </div>
</template>

<style scoped></style>