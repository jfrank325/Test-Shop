<script setup lang='ts'>
</script>

<template>
    <Transition :duration="400"
                name="slide-vertical">
                <slot />
    </Transition>
</template>

<style scoped>
.slide-vertical-enter-active,
.slide-vertical-leave-active {
    transition: all 0.3s ease-out;
}

.slide-vertical-enter-from,
.slide-vertical-leave-to {
    transform: translateX(-100%);
}
</style>