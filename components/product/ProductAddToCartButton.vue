<script setup lang='ts'>
import Product from '~/types/product'
const { addToCart, removeFromCart, cart } = useCart();
const props = defineProps<{ product: Product }>();
const message = ref('Add To Cart')
const currentCartItem = cart?.items?.find(product => product.id == props.product.id) || props.product
const cartFunction = reactive({
    name: addToCart
})
watchEffect(() => {
    console.log(currentCartItem)
    // if (!currentCartItem.quantity) {
    //     message.value = 'Add To Cart'
    //     cartFunction.name = addToCart
    // }
    if (currentCartItem.quantity) {
        message.value = 'Remove From Cart'
        cartFunction.name = removeFromCart
    } 
})
</script>

<template>
<div>
    <button @click.prevent="cartFunction.name(product)" class="w-fit bg-red-400 rounded px-2 my-2">{{ message }}</button>
</div>
</template>

<style scoped>

</style>