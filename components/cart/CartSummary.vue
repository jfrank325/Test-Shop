<script setup lang='ts'>
const { cart } = useCart();
</script>

<template>
    <div class="flex text-2xl font-semibold justify-between border-t-2 mb-8">
        <h4>Total: </h4><data :value="cart.total">{{ cart.formattedTotal }}</data>
    </div>
</template>

<style scoped></style>