<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
  <h3>About</h3>
  <img class="img" src="../assets/Images/home/minimalistic.jpg" />
  <p>Some text on about information</p>

  <h3>Architecture</h3>
        <v-row align="center" class="mt-6">
  <v-col>
    <p>Left content</p>
  </v-col>

  <v-col cols="auto" class="d-flex justify-center">
    <v-divider vertical class="mx-4" style="height: 100%;" />
  </v-col>

  <v-col>
    <img class="arch-img" src="../assets/Images/home/minimalistic.jpg" />
  </v-col>
</v-row>
  <h3>Engineering</h3>
      <v-row align="center" class="mt-6">
  <v-col>
    <p>Left content</p>
  </v-col>

  <!-- Divider column to prevent overlap -->
  <v-col cols="auto" class="d-flex justify-center">
    <v-divider vertical class="mx-4" style="height: 100%;" />
  </v-col>

  <v-col>
    <p>Text about Engineering</p>
    <p>Right content</p>
  </v-col>
</v-row>
  <h3>Projects</h3>
    <v-row align="center" class="mt-6">
  <v-col>
    <p>Left content</p>
  </v-col>

  <!-- Divider column to prevent overlap -->
  <v-col cols="auto" class="d-flex justify-center">
    <v-divider vertical class="mx-4" style="height: 100%;" />
  </v-col>

  <v-col>
    <p>Right content</p>
  </v-col>
</v-row>

  <!-- Horizontal list of project images -->
  <div class="image-list">
    <!-- Project 1 -->
    <RouterLink to="/projects/architecture">
      <img class="content-img" src="../assets/Images/home/minimalistic.jpg" alt="Architecture project" />
    </RouterLink>
    

    <!-- Project 2 -->
    <RouterLink to="/projects/engineering">
      <img class="content-img" src="../assets/Images/home/Greenlivingroom.jpg" alt="Engineering project" />
    </RouterLink>

    <!-- Project 3 -->
    <RouterLink to="/projects/planning">
      <img class="content-img" src="../assets/Images/home/Greenroom.jpg" alt="Planning project" />
    </RouterLink>

    <!-- Project 4 -->
        <RouterLink to="/projects/architecture">
      <img class="content-img" src="../assets/Images/home/minimalistic.jpg" alt="Architecture project" />
    </RouterLink>

    <!-- Project 5 -->
        <RouterLink to="/projects/engineering">
      <img class="content-img" src="../assets/Images/home/Greenlivingroom.jpg" alt="Engineering project" />
    </RouterLink>

    <!-- Project 6 -->
        <RouterLink to="/projects/planning">
      <img class="content-img" src="../assets/Images/home/Greenroom.jpg" alt="Planning project" />
    </RouterLink>
  </div>
</template>

<style>
.img {
  width: 100%;
  height: 800px;
  object-fit: cover;
}

.arch-img {
  width: 100%;
  height: 400px;
  border-radius: 12px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-list {
  display: flex;
  gap: 20px; /* spacing between images */
  overflow-x: auto; /* horizontal scroll if needed */
  white-space: nowrap;
  padding-bottom: 0px;
  scrollbar-width: none;;
}

.image-list::-webkit-scrollbar {
  display: none; 
}

.content-img {
  width: 400px;
  height: 300px;
  border-radius: 12px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.content-img:hover {
  cursor: pointer;
  transform: scale(1.05);
}
h3 {
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
}
.apply-btn {
  background-color: rgb(128,150,113);
  color: white;
  border: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
</style>
