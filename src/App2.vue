<template>
  {{ cart.name }} - {{ cart.qty }} - {{ cart.price * cart.qty }}

    <button @click="cart.qty--">-</button>
    <button @click="cart.qty++">+</button>

    <br>
    <button @click="changeProduct">Change product</button>
</template>

<script>
import { useSingleCartStore } from './stores/single-cart'
export default {
  setup () {
    const cart = useSingleCartStore()

    const randomNumber = () => Math.floor(Math.random() * 10) + 1

    const changeProduct = () => {
        cart.$patch({
            name: "Product " + randomNumber(),
            qty: randomNumber()
        })
    }

    return { cart, changeProduct }
  }
}
</script>