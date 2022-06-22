import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
    state: () => ({
        item: "TShirt",
        price: 15,
        qty: 2
    })
})