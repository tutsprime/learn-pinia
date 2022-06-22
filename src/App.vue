<template>
  {{ item }} - {{ quantity }} - {{ subTotal }}
</template>

<script>
import { mapState } from 'pinia'
import { useCartStore } from "./stores/cart"

export default {
  computed: {
    ...mapState(useCartStore, ['item']),
    ...mapState(useCartStore, {
      quantity: 'qty',
      subTotal: store => store.price * store.qty
    })
  }
}
</script>