<script setup lang='ts'>
</script>

<template>
    <Transition name="fade-in">
                <slot />
    </Transition>
</template>

<style scoped>
.fade-in-enter-active,
.fade-in-leave-active {
    transition: all 0.5s ease;
}

.fade-in-enter-from,
.fade-in-leave-to {
    transform: translateY(10%);
    opacity: 0;
}
</style>