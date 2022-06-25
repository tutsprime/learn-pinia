<template>
  <div v-for="product in products" :key="product.id">
    {{ product.name }} - {{ product.qty }} - {{ product.qty * product.price }}
    <button @click="product.qty--">-</button>
    <button @click="product.qty++">+</button>
  </div>
  <div v-if="!isEmpty">
    Items in cart: {{ count }}
    <br>
    Total: {{ total }}
  </div>
  <p>
    Hot Product: {{ hotProduct }}
  </p>
</template>

<script>
import { mapState, mapWritableState } from 'pinia'
import { useCartStore } from "./stores/cart"

export default {
  computed: {
    ...mapState(useCartStore, ['products', 'count', 'total', 'isEmpty', 'hotProduct'])
  }
}
</script>