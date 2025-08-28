<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <header>
    <!-- Use :class for dynamic classes -->
    <nav :class="['nav', { 'nav-overlay': route.path === '/' }]">
      <div class="nav-left">
        <RouterLink to="/" class="brand">Ovrspace</RouterLink>
      </div>

      <ul class="nav-center">
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/projects">Projects</RouterLink></li>
        <li><RouterLink to="/career">Career</RouterLink></li>
        <li><RouterLink to="/press">Press</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>

      <div class="nav-right">
        <input type="search" placeholder="Search..." class="search" />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav {
  position: relative; /* default for all pages */
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(128,150,113); /* default background */
}

.nav-overlay {
  position: absolute; /* only on homepage */
  top: 0;
  left: 0;
  background: transparent;
  z-index: 1000;
}

.nav-left .brand {
  color: rgb(163, 177, 138);
  text-decoration: none;
  font-weight: bold;
  font-size: 1.4rem;
}

.nav-center {
  display: flex;
  list-style: none;
  gap: 20px;
}

.nav-center li a {
  color: rgb(173,195,183);
  text-decoration: none;
  font-weight: bold;
}

.nav-right .search {
  padding: 8px 12px;
  border: none;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0);
  color: rgb(163, 177, 138);
}

.nav-right .search::placeholder {
  color: rgb(163, 177, 138);
}
</style>
