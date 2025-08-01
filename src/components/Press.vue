<script setup></script>
<template>
  <div class="left-links">
    <v-list dense nav>
      <v-list-item link title="News"></v-list-item>
      <v-list-item link title="Events"></v-list-item>
      <v-list-item link title="Awards"></v-list-item>
    </v-list>
  </div>

  <div class="main-content">
    <h1>Press</h1>
    <!-- Add your actual press content here -->
    <div id="#news">
    <h2>News</h2>
    <
    <p>We are a design-driven architecture studio committed to creating spaces that inspire.
       Rooted in simplicity and purpose, our work blends form, function, and sustainability.
       Since our founding in Nairobi in 2023, we’ve delivered projects ranging from intimate
       interiors to large-scale urban developments — all shaped by a belief that great design improves everyday life
    </p>
    </div>
  </div>

</template>


<style>
.left-links {
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 130px;
  background-color: rgba(0, 0, 0, 0,) ;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0px;
  padding-bottom: 0px;
  border-right: 1px solid rgba(0, 0, 0, 0,);
}

.main-content {
  margin-left: 130px;
  padding: 32px;
} 
</style>