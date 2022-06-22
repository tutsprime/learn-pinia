<template>
  {{ cart.name }} - {{ cart.qty }} - {{ cart.price * cart.qty }}

    <button @click="cart.qty--">-</button>
    <button @click="cart.qty++">+</button>
</template>

<script>
import { useSingleCartStore } from './stores/single-cart'
export default {
  setup () {
    const cart = useSingleCartStore()

    return { cart }
  }
}
</script>