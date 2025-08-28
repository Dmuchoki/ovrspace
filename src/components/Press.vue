<script setup></script>
<template>
  <div class="left-links">
    <v-list dense nav>
      <v-list-item><a href="news">News</a></v-list-item>
      <v-list-item><a href="events">Events</a></v-list-item>
      <v-list-item><a href="awards">Awards</a></v-list-item>
    </v-list>
  </div>

  <div class="main-content">
    <h1>Press</h1>
    <!-- Add your actual press content here -->
    <div id="news">
    <h2>News</h2>
    
    <p>We are a design-driven architecture studio committed to creating spaces that inspire.
       Rooted in simplicity and purpose, our work blends form, function, and sustainability.
       Since our founding in Nairobi in 2023, we’ve delivered projects ranging from intimate
       interiors to large-scale urban developments — all shaped by a belief that great design improves everyday life
    </p>
    
    </div>
    <div id="events">
      <h2>Events</h2>
     <p>
      Design Dialogues – April 2024
An open panel discussion featuring East African architects exploring the theme: "Sustainable Design in Rapid Urbanization."

Studio Open House – August 2023
Clients, students, and collaborators were welcomed to tour our workspace, preview upcoming projects, and network with our designers.

Architecture x Art Exhibit – December 2022
A collaborative installation where we partnered with local artists to showcase the intersection of space, light, and sculpture.
     </p>
    </div>
    <div id="awards">
      <h2>Awards</h2>
      <p>
        2023: Best Emerging Architecture Firm - East Africa Design Awards
        2022: Excellence in Sustainable Design - Nairobi Architectural Review
        2021: Innovative Use of Materials - Pan-African Architecture Forum
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