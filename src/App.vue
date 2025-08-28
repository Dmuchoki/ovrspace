<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <v-app>
    <Nav />
    <v-main class="page-background">
      <RouterView />
    </v-main>
    <Footer />
  </v-app>
</template>

<style>
.page-background {
  background-color: rgb(128,150,113); 
  color: rgb(5, 5, 5);

}
</style>
