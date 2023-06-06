import { reactive } from 'vue'
import Product from '~/types/product'

interface Cart {
    items: Product[],
    total: number
}

const cart: Cart = reactive({
    items: [],
    total: 0
})

export const useCart = () => {

    const adjustTotal = () => {
        if (!cart.items.length) {
            cart.total = 0
        } else if (cart.items.length == 1) {
            if (cart.items[0].price && cart.items[0].quantity)
                cart.total = cart.items[0].price * cart.items[0].quantity
        } else {
            const clonedItems = unref(cart.items)
            cart.total = clonedItems.reduce((accumulator, currentItem): Product | any => {
                if (currentItem.price && currentItem.quantity)
                    return accumulator + currentItem.price * currentItem.quantity;
            }, 0);
        }
    }

    const addToCart = (item: Product) => {
        if (cart.items.includes(item)) {
            const itemToAdd = cart.items.find((cartItem) => item.id == cartItem.id);
            itemToAdd?.quantity ? itemToAdd.quantity += 1 : ''
        } else {
            cart.items.unshift(item)
            item.quantity = 1
        }
        adjustTotal();
    }

    const removeFromCart = (item: Product) => {
        if (cart.items.length) {
            if (cart.items.includes(item)) {
                cart.items = cart.items.filter(cartItem => cartItem !== item)
            }
        }
        adjustTotal();
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
        adjustTotal();
    }

    return { cart, addToCart, removeFromCart, reduceFromCart }
}