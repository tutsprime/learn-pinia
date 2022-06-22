<template>
  <div v-for="product in products" :key="product.id">
    {{ product.name }} - {{ product.qty }} - {{ product.qty * product.price }}
    <button @click="product.qty--">-</button>
    <button @click="product.qty++">+</button>
  </div>
</template>

<script>
import { mapState, mapWritableState } from 'pinia'
import { useCartStore } from "./stores/cart"

export default {
  computed: {
    ...mapState(useCartStore, ['products'])
  }
}
</script>