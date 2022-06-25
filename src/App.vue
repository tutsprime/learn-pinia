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
  <button @click="newProduct">Add new product</button>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useCartStore } from "./stores/cart"

export default {
  computed: {
    ...mapState(useCartStore, ['products', 'count', 'total', 'isEmpty', 'hotProduct'])
  },
  methods: {
    ...mapActions(useCartStore, ['addProduct']),
    newProduct () {
      this.addProduct({
        name: "Product x",
        qty: 1,
        price: 10
      })
    }
  }
}
</script>