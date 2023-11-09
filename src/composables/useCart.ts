import { ICartItem, IProduct } from "../types"
import { ref, Ref, computed } from 'vue'

const cart: Ref<ICartItem[]> = ref([])

export function useCart() {

    const addItem = (product: IProduct, quantity: number) => {

        const alreadyHasItem = cart.value.filter(item => item.product.id === product.id).length > 0

        if (alreadyHasItem) {
            incrementItem(product.id)
        } else {
            cart.value = [...cart.value, {
                product: product,
                quantity: quantity
            }]
        }
    }

    const incrementItem = (productId: number) => {
        const getItemIndex = cart.value.findIndex(item => item.product.id === productId)
        cart.value[getItemIndex].quantity += 1
    }

    const decrementItem = (productId: number) => {
        const getItemIndex = cart.value.findIndex(item => item.product.id === productId)
        if (cart.value[getItemIndex].quantity === 1) {
            removeItem(productId)
        } else {
            cart.value[getItemIndex].quantity -= 1
        }
    }

    const removeItem = (productId: number) => {
        const getItemIndex = cart.value.findIndex(item => item.product.id === productId)
        if (getItemIndex > -1) {
            cart.value.splice(getItemIndex, 1);
        }
    }

    const total = computed(() => {
        let sum = 0

        cart.value.map((item) => {
            sum += item.product.price * item.quantity
        })

        return sum
    })


    return {
        items: cart,
        addItem,
        incrementItem,
        removeItem,
        decrementItem,
        total
    }
}

