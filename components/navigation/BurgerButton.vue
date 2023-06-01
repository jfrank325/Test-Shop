<script setup lang='ts'>
const { isOpen, toggleMenu, closeMenu } = useMenu();
const burgerButton = ref()
onClickOutside(burgerButton, (event: any) => {
      if (burgerButton != event.target) closeMenu()
})
</script>

<template>
      <div @click="toggleMenu"
           ref="burgerButton"
           class="cursor-pointer">
            <Icon v-if="isOpen"
                  name="mdi:close"
                  size="30"
                  color="#000" />
            <Icon v-else
                  name="mdi:menu"
                  size="30"
                  color="#000" />
      </div>
</template>

<style scoped></style>