import { useNavigatorLanguage } from '@vueuse/core'
const { language } = useNavigatorLanguage();
const currentLanguage = ref()
export const useLanguage = () => {
    currentLanguage.value = language
    return { currentLanguage }
}