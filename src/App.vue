<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Nav from './components/Nav.vue';
</script>

<template>
  <v-app>
    <Nav />
    <v-main class="page-background">
      <RouterView />
    </v-main>
  </v-app>
</template>

<style>
.page-background {
  background-color: rgb(252, 248, 214); 
  color: rgb(94, 34, 23);
}
</style>
