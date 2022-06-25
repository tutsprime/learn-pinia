import { defineStore } from "pinia";

export const useSingleCartStore = defineStore("singleCartStore", {
    state: () => ({
        name: "TShirt",
        price: 15,
        qty: 1
    }),
    getters: {
        hotProduct () {
            return this.name;
        }
    }
})