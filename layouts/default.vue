<script setup lang='ts'>

</script>

<template>
    <div class="min-h-screen mx-1">
        <NavigationNavbar class="md:pb-6"/>
        <NavigationMenu :isStatic="false"/>
        <slot />
        <TheFooter class="relative h-full"/>
    </div>
</template>

<style scoped></style>