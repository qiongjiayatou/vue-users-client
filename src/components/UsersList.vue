<template>
  <div class="text-left">
    <table class="table">
      <thead>
        <tr>
          <th>Full Name (Last Name, First Name, Patronymic)</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in laravelData.data" :key="user.id">
          <td>{{ user.full_name }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
    <pagination
      :data="laravelData"
      @pagination-change-page="getResults"
    ></pagination>


  </div>
</template>

<script>
import pagination from "laravel-vue-pagination";

import axios from "axios";

export default {
  components: {
    pagination,
  },
  data() {
    return {
      laravelData: {},
    };
  },
  methods: {
    getResults(page = 1) {
      axios
        .get("users?page=" + page)
        .then((response) => {
          this.laravelData = response.data;
        })
        .catch((error) => console.log(error));
    },
  },

  created() {
    this.getResults();
  },
};
</script>