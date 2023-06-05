<script setup lang='ts'>
</script>

<template>
    <Transition :duration="400"
                name="slide-horizontal">
                <slot />
    </Transition>
</template>

<style scoped>
.slide-horizontal-enter-active,
.slide-horizontal-leave-active {
    transition: all 0.3s ease-out;
}

.slide-horizontal-enter-from,
.slide-horizontal-leave-to {
    transform: translateY(-100%);
}
</style>