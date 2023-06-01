import { reactive } from 'vue'
import Product from '~/types/product'

interface Cart {
    items: Product[],
}

const cart: Cart = reactive({
    items: []
})

export const useCart = () => {

    const addToCart = (item: Product) => {
        if (cart.items.includes(item)) {
            const itemToAdd = cart.items.find((cartItem) => item.id == cartItem.id);
            itemToAdd?.quantity ? itemToAdd.quantity += 1 : ''
        } else {
            cart.items.unshift(item)
            item.quantity = 1
            console.log({cart});
        }
    }

    const removeFromCart = (item: Product) => {
        if (cart.items.length) {
            if (cart.items.includes(item)) {
                const itemToRemove = cart.items.find((cartItem) => item.id == cartItem.id);
                console.log({itemToRemove});
                cart.items = cart.items.filter(cartItem => cartItem.id !== itemToRemove?.id)
                console.log({cart})
            }
        }
    }
    
    const reduceFromCart = (item: Product) => {
        if (cart.items.length) {
            if (cart.items.includes(item)) {
                const itemToReduce = cart.items.find((cartItem) => item.id == cartItem.id);
                if (itemToReduce?.quantity && itemToReduce?.quantity > 1) {
                    itemToReduce.quantity -= 1
                } else if (itemToReduce?.quantity === 1) {
                    removeFromCart(item)
                }
            }
        }
    }

    return { cart, addToCart, removeFromCart, reduceFromCart }
}