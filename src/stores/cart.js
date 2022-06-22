import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
    state: () => ({
        products: [
            {
                name: "TShirt",
                price: 15,
                qty: 1
            }
        ]
    })
})