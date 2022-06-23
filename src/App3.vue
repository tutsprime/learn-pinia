<template>
  <div v-for="product in cart.products" :key="product.id">
    {{ product.name }} - {{ product.qty }} - {{ product.qty * product.price }}
    <button @click="product.qty--">-</button>
    <button @click="product.qty++">+</button>
  </div>
  <button @click="addProduct">Add new product</button>
</template>

<script>
import { useCartStore } from './stores/cart'

export default {
    setup() {
        const cart = useCartStore()

        const randomNumber = () => Math.floor(Math.random() * 10) + 1

        const addProduct = () => {
            cart.$patch(state => {
                state.products.push({
                    name: "Product " + randomNumber(),
                    qty: 1,
                    price: randomNumber()
                })
            })
        }

        return { addProduct, cart }
    }
}
</script>