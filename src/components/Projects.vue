<script setup>
import { ref } from 'vue';

const tab = ref(null);
</script>
<template>
    <h1>Projects</h1>

    <v-tabs v-model="tab" >
    <v-tab value="Institutional">Institutional</v-tab>
    <v-tab value="Industrial">Industrial</v-tab>
    <v-tab value="Landscape">Landscape</v-tab>
    <v-tab value="Residential">Residential</v-tab>
    <v-tab value="Interior">Interior</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="Institutional">
          One
        </v-tabs-window-item>
         
        <v-tabs-window-item value="Industrial">
          Two
        </v-tabs-window-item>

        <v-tabs-window-item value="Landscape">
          Three
        </v-tabs-window-item>

         <v-tabs-window-item value="Residential">
          Three
        </v-tabs-window-item>

         <v-tabs-window-item value="Interior">
          Three
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
</template>
<style scoped></style>