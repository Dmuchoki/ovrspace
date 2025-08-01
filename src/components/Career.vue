<script setup>
import { ref } from 'vue';

const desserts = ref([
  {
   title: 'Software Engineer',
    field: 'Engineering',
    location: 'Remote',
    deadline: '2023-12-31',
  },
  {
    title: 'Data Scientist',
    field: 'Data Science',
    location: 'New York',
    deadline: '2024-01-15',
  },
  {
    title: 'Product Manager',
    field: 'Management',
    location: 'San Francisco',
    deadline: '2024-02-01',
  },
  {
    title: 'UX Designer',
    field: 'Design',
    location: 'Los Angeles',
    deadline: '2024-03-10',
  },
    {
        title: 'Marketing Specialist',
        field: 'Marketing',
        location: 'Chicago',
        deadline: '2024-04-20',
    },
]);
</script>
<template>
    <h1>career</h1>
    <p>Some texts about job opportunities and stuff</p>
    <v-spacer></v-spacer>
    <h4>Job opportunities</h4>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Title
        </th>
        <th class="text-left">
          Field
        </th>
        <th class="text-left">
          Location
        </th>
        <th class="text-left">
          Deadline
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.title }}</td>
        <td>{{ item.field }}</td>
        <td>{{ item.location }}</td>
        <td>{{ item.deadline }}</td>
        <!--
         for deadline. 
         if the date of deadline passes apply btn becomes inactive, 
         btn is active before deadline date. 
         Show the date to the left of the btn 
         -->
      </tr>
    </tbody>
  </v-table>
 <router-link to="/application">
  <button>Apply</button>
</router-link>

</template>
<style scoped></style>