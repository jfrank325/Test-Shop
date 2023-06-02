<script setup lang='ts'>
// const isTop = inject('isTop');
import { onClickOutside } from '@vueuse/core'
const { cart } = useCart();
const { closeMenu } = useMenu();
let cartItemsAmount: ComputedRef<number>;
watchEffect(() => {
    cartItemsAmount = computed(() => cart?.items?.length);
})
const nav = ref()
onClickOutside(nav, (event: any) => {
    if(nav != event.target)  closeMenu()
})
</script>

<template>
    <div>
        <header>
            <!-- <nav :class="[isTop ? 'bg-black h-12 py-8 px-6' : 'bg-white h-8 py-6 px-4']" -->
            <nav class="bg-white h-8 py-6 px-4 flex justify-between items-center mb-4 md:mb-12">
                <!-- class="4 flex justify-between items-center"> -->
                <NavigationBurgerButton />
                <NuxtLink to="/" class="absolute left-1/2 transform -translate-x-2/4">
                    <img src="../../assets/yt-windows-logo.webp"
                         alt="YT-Industries"
                         width="70"
                         height="70">
                </NuxtLink>
                <NuxtLink to="/checkout/cart">
                    <Icon name="mdi:cart"
                          color="#000"
                          size="25" />
                    <span v-if="cartItemsAmount > 0">{{ cartItemsAmount }}</span>
                </NuxtLink>
            </nav>
        </header>
    </div>
</template>

<style scoped></style>