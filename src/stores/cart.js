import { defineStore } from "pinia";
import { useSingleCartStore } from "./single-cart";

export const useCartStore = defineStore("cartStore", {
    state: () => ({
        products: [
            {
                name: "TShirt",
                price: 15,
                qty: 1
            }
        ]
    }),
    getters: {
        // count: state => state.products.length,
        total: state => state.products.reduce((total, current) => current.price * current.qty + total, 0),
        count () {
            return this.products.length;
        },
        isEmpty () {
            return this.count < 1;
        },
        hotProduct () {
            const otherCart = useSingleCartStore();
            return otherCart.hotProduct
        }
    }
})