<script setup>
import { ref } from 'vue';
</script>

<template>
    <div class="nav-container">
    <v-speed-dial
  location="right"
  transition="slide-y-reverse-transition"
>
  <template v-slot:activator="{ props: activatorProps }">
    <v-fab
      v-bind="activatorProps"
      size="large"
      icon="mdi-orbit"
      color="rgb(94, 34, 23)"
    ></v-fab>
  </template>

  <v-btn
   key="home"
   icon="mdi-home-circle-outline"
   @click="$router.push('/')"
   title="Home"
   color="rgb(94, 34, 23)"
   > 
</v-btn>
  <v-btn 
  key="about"
  icon="mdi-comment"
  @click="$router.push('/about')"
  title="About"
  color="rgb(94, 34, 23)"
  >
  </v-btn>
  <v-btn key="projects" 
  icon="mdi-home-modern"
  color="rgb(94, 34, 23)"
  @click="$router.push('/projects')"
  title="Projects"
  ></v-btn>
  <v-btn key="contact" 
  icon="mdi-email"
  @click="$router.push('/contact')"
  title="Contact"
  color="rgb(94, 34, 23)"
  ></v-btn>
    <v-btn
      key="press"
      icon="mdi-file"
      @click="$router.push('/press')"
      title="Press"
      color="rgb(94, 34, 23)"
    ></v-btn>
    <v-btn
      key="career"
      icon="mdi-badge-account"
      @click="$router.push('/career')"
      title="Career"
      color="rgb(94, 34, 23)"
    ></v-btn>
    </v-speed-dial>
    </div>
    <div class="search">
        <input type="search" placeholder="Search..."  />
    </div>
</template>
<style>
.nav-container {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 4000;
  color: rgb(252, 248, 214);
}
.search {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 4000;
  color: rgb(94, 34, 23);
}
</style>

<!-- mdi:icons -> mdi.bessarabov.com -->