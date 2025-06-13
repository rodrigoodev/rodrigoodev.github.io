<script setup>
import { ref } from "vue";
import { useCartStore } from "@/stores/cartStore";

const cartStore = useCartStore();
const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};
</script>
<template>
  <header>
    <div class="logo">
      <router-link to="/" @click="closeMobileMenu">RG Academy</router-link>
    </div>

    <!-- Menu Desktop -->
    <nav class="desktop-nav">
      <ul>
        <li><router-link to="/produtos">Produtos</router-link></li>
        <li><router-link to="/contato">Contato</router-link></li>
        <li class="cart-wrapper">
          <icon :icon="['fas', 'cart-shopping']" />
          <div class="contador">{{ cartStore.cartCount }}</div>
        </li>
      </ul>
    </nav>

    <!-- Botão Menu Hambúrguer -->
    <button
      class="mobile-menu-btn"
      @click="toggleMobileMenu"
      :class="{ active: mobileMenuOpen }"
    >
      <icon :icon="['fas', 'bars']" v-if="!mobileMenuOpen" />
      <icon :icon="['fas', 'times']" v-if="mobileMenuOpen" />
    </button>

    <!-- Menu Mobile -->
    <nav class="mobile-nav" :class="{ active: mobileMenuOpen }">
      <ul>
        <li>
          <router-link to="/produtos" @click="closeMobileMenu"
            >Produtos</router-link
          >
        </li>
        <li>
          <router-link to="/contato" @click="closeMobileMenu"
            >Contato</router-link
          >
        </li>
        <li class="cart-wrapper">
          <icon :icon="['fas', 'cart-shopping']" />
          <div class="contador">{{ cartStore.cartCount }}</div>
          <span>Carrinho</span>
        </li>
      </ul>
    </nav>

    <!-- Overlay para fechar menu ao clicar fora -->
    <div
      class="overlay"
      :class="{ active: mobileMenuOpen }"
      @click="closeMobileMenu"
    ></div>
  </header>
</template>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-color);
  padding: 1rem 2rem;
  color: white;
  position: relative;
}

.logo a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
}

/* Menu Desktop */
.desktop-nav ul {
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.desktop-nav a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.desktop-nav a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.router-link-active {
  color: yellow !important;
}

.cart-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
  align-items: center;
  font-size: 0.6rem;
  font-weight: bold;
}

/* Botão Menu Hambúrguer */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.mobile-menu-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Menu Mobile */
.mobile-nav {
  display: none;
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background-color: var(--primary-color);
  transition: right 0.3s ease;
  z-index: 1000;
  padding-top: 4rem;
}

.mobile-nav.active {
  right: 0;
}

.mobile-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.mobile-nav li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-nav a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 1rem 2rem;
  transition: background-color 0.3s ease;
}

.mobile-nav a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.mobile-nav .cart-wrapper {
  padding: 1rem 2rem;
  justify-content: flex-start;
}

.mobile-nav .cart-wrapper span {
  margin-left: 0.5rem;
}

/* Overlay */
.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay.active {
  opacity: 1;
}

/* Media Queries */
@media (max-width: 768px) {
  header {
    padding: 1rem;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .mobile-nav {
    display: block;
  }

  .overlay.active {
    display: block;
  }
}

@media (max-width: 480px) {
  .mobile-nav {
    width: 250px;
    right: -250px;
  }

  .logo a {
    font-size: 1rem;
  }
}
</style>
