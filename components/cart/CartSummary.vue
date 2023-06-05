<script setup lang='ts'>
const { cart } = useCart();
const formattedTotal = ref()
watchEffect(() => {
    formattedTotal.value = unref(formatPrice(cart.total))
})
</script>

<template>
    <div class="flex text-2xl font-semibold justify-between border-t-2 mb-8">
        <h4>Total: </h4><data :value="cart.total">{{ formattedTotal }}</data>
    </div>
</template>

<style scoped></style>