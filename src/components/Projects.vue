<script setup>
import { ref } from 'vue';

const tab = ref(null);
</script>
<template>
  <div class="tabs-page">
    <h1>Projects</h1>

    <v-tabs v-model="tab" class="full-tabs">
      <v-tab value="Institutional" grow>Institutional</v-tab>
      <v-tab value="Industrial" grow>Industrial</v-tab>
      <v-tab value="Landscape" grow>Landscape</v-tab>
      <v-tab value="Residential" grow>Residential</v-tab>
      <v-tab value="Interior" grow>Interior</v-tab>
    </v-tabs>

    <div class="tab-content">
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="Institutional">One</v-tabs-window-item>
        <v-tabs-window-item value="Industrial">Two</v-tabs-window-item>
        <v-tabs-window-item value="Landscape">Three</v-tabs-window-item>
        <v-tabs-window-item value="Residential">Four</v-tabs-window-item>
        <v-tabs-window-item value="Interior">Five</v-tabs-window-item>
      </v-tabs-window>
    </div>
  </div>
</template>

<style scoped>
.tabs-page {
  display: flex;
  flex-direction: column;
  height: 100vh; /* take full screen height */
}

.full-tabs {
  width: 100%; /* tabs bar spans whole width */
}

.tab-content {
  flex: 1; /* take up remaining space */
  overflow-y: auto; /* scroll if content too big */
  transition: 0s;
  padding: 16px;
  background: rgb(128,150,113); /* optional */
}

</style>