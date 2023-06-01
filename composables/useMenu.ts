import { ref } from 'vue'

 const isOpen = ref(false)
 export const useMenu = () => {
     const toggleMenu = () => {
        isOpen.value ? isOpen.value = false : isOpen.value = true
    }
    const closeMenu = () => {
        isOpen.value = false
    }
     return { isOpen, toggleMenu, closeMenu}
}
