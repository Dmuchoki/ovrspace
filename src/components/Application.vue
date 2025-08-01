<script setup>
import { ref } from 'vue';

const isFormOpen = ref(false);
const education = ref('');
const experience = ref('');
const skills = ref('');

const openFileInput = () => {
  isFormOpen.value = true;
};
const closeform = () => {
  isFormOpen.value = false;
// Reset form fields
  education.value = ''
  experience.value = ''
  skills.value = ''
};

const submitApplication = () => {
  // Handle form submission logic here
  console.log('Application submitted:', {
    education: education.value,
    experience: experience.value,
    skills: skills.value,
  });
};
</script>
<template>
   <h1>Application</h1> 
   <v-card text="PERSONAL INFORMATION" variant="tonal">
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :counter="10"
            :rules="nameRules"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :counter="10"
            :rules="nameRules"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

            <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="phone"
            :counter="10"
            :rules="nameRules"
            label="Phone"
            type="tel"
            required
          ></v-text-field>
        </v-col>

            <v-col
          cols="12"
          md="4"
        >
        <!-- make sure it can be able to get all the countries info -->
          <v-text-field
            v-model="Country"
            :counter="10"
            :rules="nameRules"
            label="Country"
            required
          ></v-text-field>
        </v-col>

                    <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="Address"
            :counter="10"
            :rules="nameRules"
            label="Address"
            required
          ></v-text-field>
        </v-col>

       <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="City"
            :counter="10"
            :rules="nameRules"
            label="City"
            required
          ></v-text-field>
        </v-col>

         <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="zipCode"
            :counter="10"
            :rules="nameRules"
            label="Zip code"
            type="number"
            required
          ></v-text-field>
        </v-col>

         <v-col
          cols="12"
          md="4"
        >
        <!-- also make education level an option thing. -->
          <v-text-field
            v-model="educationLevel"
            :counter="10"
            :rules="nameRules"
            label="Education level"
            required
              ></v-text-field>
              </v-col>
            </v-row>
    </v-container>
  </v-form>
   </v-card>

<v-card text="PROFFESIONAL PROFILE" variant="outlined">
<h5>Education</h5>
<v-btn variant="tonal" @click="openFileInput">Add</v-btn>
<v-form v-show="isFormOpen">
  <v-text-field
    v-model="education"
    label="Education"
    required
  ></v-text-field>
  <v-text-field
    v-model="experience"
    label="Experience"
    required
  ></v-text-field>
  <v-text-field
    v-model="skills"
    label="Skills"
    required
  ></v-text-field>
  <v-btn @click="closeform">cancel</v-btn>
<v-btn @click="submitApplication">save</v-btn>
</v-form>
</v-card>
</template>
<style scoped></style>
