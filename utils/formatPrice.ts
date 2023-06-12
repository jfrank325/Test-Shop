export default function formatPrice(price: number) {
    return computed(() => price?.toLocaleString('USD', {
        style: 'currency', currency: 'USD', minimumFractionDigits: 2,
    }))
}