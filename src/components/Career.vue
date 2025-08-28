<script setup>
import { ref } from 'vue';

const jobs = ref([
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

  <img class="arch-img" src="/public/Images/home/minimalistic.jpg" />
  <p>Some texts about job opportunities and stuff</p>
    <v-spacer></v-spacer>
    <h4>Job opportunities</h4>
    <v-table  hover>
    <thead class="table-header">
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
        v-for="(item, index) in jobs"
        :key="index"
        :class="index % 2 === 0 ? 'row-even' : 'row-odd'"
      >
        <td>{{ item.title }}</td>
        <td>{{ item.field }}</td>
        <td>{{ item.location }}</td>
        <td>{{ item.deadline }}</td>
        <!--
         for deadline. 
         if the date of deadline passes apply btn becomes inactive, 
         btn is active before deadline date. 
         Show the massege "deadline-passed" to the left of the btn 
         -->
      </tr>
    </tbody>
  </v-table>

 <router-link to="/application">
  <button class="apply-btn">Apply</button>
</router-link>

</template>

<style scoped>
.table-header {
  background-color: rgb(173,195,183);
  color: rgb(5, 5, 5);
}
.row-even {
  background-color: rgb(128,150,113);
}
.row-odd {
  background-color: rgb(173,195,183);
}
</style>