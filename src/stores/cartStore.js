import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
    const cartCount = ref(0);

    const increment = () => {
        cartCount.value++;
    }

    return { cartCount, increment };
})