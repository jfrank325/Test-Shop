<script setup lang='ts'>
import Product from '~/types/product'
const { addToCart, removeFromCart, cart } = useCart();
const props = defineProps<{ product: Product, icon: Boolean }>();
const message = ref('Add To Cart')
const currentCartItem = props.product
const cartFunction = reactive({
    name: addToCart
})
watchEffect(() => {
    if (currentCartItem.quantity) {
        message.value = 'Remove From Cart'
        cartFunction.name = removeFromCart
    }
    const matchingCartItemID = cart.items.find(item => item.id == currentCartItem.id)?.id
    if (!matchingCartItemID) {
        message.value = 'Add To Cart'
        cartFunction.name = addToCart
    }
})

</script>

<template>
    <div class="cursor-pointer">
        <button v-if="!icon"
                @click.prevent="cartFunction.name(product)"
                class="w-fit bg-red-400 rounded px-3 py-1 my-2 font-semibold hover:shadow-lg hover:shadow-gray-500/50">{{
                    message }}</button>
        <Icon v-else
              @click.prevent="cartFunction.name(product)"
              name="bi:trash"
              color="#000"
              size="25" />
    </div>
</template>

<style scoped></style>