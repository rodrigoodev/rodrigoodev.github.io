<script setup>
import { useCartStore } from "@/stores/cartStore";

const cartStore = useCartStore();
</script>
<template>
  <header>
    <div class="logo">
      <router-link to="/">RG Academy</router-link>
    </div>
    <nav>
      <ul>
        <li><router-link to="/produtos">Produtos</router-link></li>
        <li><router-link to="/contato">Contato</router-link></li>
        <li class="cart-wrapper">
          <icon :icon="['fas', 'cart-shopping']" />
          <div class="contador">{{ cartStore.cartCount }}</div>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  background-color: var(--primary-color);
  padding: 1rem 2rem;
  color: white;
}

nav ul {
  display: flex;
  gap: 1rem;
  list-style: none;
}

a {
  color: white;
  text-decoration: none;
}

.router-link-active {
  color: yellow;
}

.logo a {
  color: white;
}

.cart-wrapper {
  position: relative;
}

.contador {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 2px;
  font-size: 0.6rem;
}
</style>
