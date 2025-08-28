<script setup>
import Nav from '@/components/Nav.vue'
</script>

<template>
  <div class="carousel-container">
    <v-carousel 
      show-arrows="hover" 
      height="500" 
      hide-delimiter-background
      cycle
      interval="5000"
      transition="fade-transition" 
    >
      <v-carousel-item src="/public/Images/home/GreenBathroom.jpg" cover />
      <v-carousel-item src="/public/Images/home/Greenroom.jpg" cover />
      <v-carousel-item src="/public/Images/home/Greenlivingroom.jpg" cover />
    </v-carousel>
  </div>

  <!-- Latest Work -->
  <div class="container">

    <h2>Latest Work</h2>
    <p>Some text about work!!!</p>
    <h5>sub-topic</h5>
    <p>sub-topic information</p>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card variant="tonal">
          <v-img src="/public/Images/home/Greenlivingroom.jpg" class="images" />
          <v-card-title>Project title</v-card-title>
          <v-card-text>Project description</v-card-text>
          <v-card-subtitle>date</v-card-subtitle>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card variant="tonal">
          <v-img src="/public/Images/home/Greenlivingroom.jpg" class="images" />
          <v-card-title>Project title</v-card-title>
          <v-card-text>Project description</v-card-text>
          <v-card-subtitle>date</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <p>text</p>
        <h5>sub-topic</h5>
    <p>sub-topic information</p>
    <img class="img" src="/public/Images/home/minimalistic.jpg" />
        <h5>sub-topic</h5>
    <v-row align="center" class="mt-6">
  <v-col>
    <p>Left content</p>
  </v-col>

  <!-- Divider column to prevent overlap -->
  <v-col cols="auto" class="d-flex justify-center">
    <v-divider vertical class="mx-4" style="height: 100px;" />
  </v-col>

  <v-col>
    <p>Right content</p>
  </v-col>
</v-row>

  </div>

  <!-- Collections -->
  <div class="container">
    <h2>Collections</h2>
    <p>Some more text about collections!</p>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card variant="tonal">
          <v-img src="/public/Images/home/greenroom.jpg" class="images" />
          <v-card-title>Project title</v-card-title>
          <v-card-text>Project description</v-card-text>
          <v-card-subtitle>date</v-card-subtitle>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card variant="tonal">
          <v-img src="/public/Images/home/greenroom.jpg" class="images" />
          <v-card-title>Project title</v-card-title>
          <v-card-text>Project description</v-card-text>
          <v-card-subtitle>date</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <p>text</p>
  </div>

</template>

<style scoped>
.carousel-container {
  position: relative;
}

:deep(.v-carousel .v-btn) {
  background-color: transparent !important;
  box-shadow: none !important;
}

:deep(.v-carousel .v-btn .v-icon) {
  color: white !important;
}

/* 🔹 Desired image measurements */
.images {
  height: 350px;      /* fixed height */
  max-width: 300px;   /* keep card from stretching too wide */
  margin: 0 auto;     /* center image inside the card */
  object-fit: contain; /* keeps full image visible */
}

.container {
  padding: 24px;
  text-align: center;
}

h5 {
  display: inline-block;
  margin-right: 30px;
}


</style>
