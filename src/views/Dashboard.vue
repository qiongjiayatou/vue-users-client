<template>
    <div class="container">
      <h1>Users List</h1>
      <users-list></users-list>
    </div>
</template>

<script>

import UsersList from '../components/UsersList.vue'

export default {

  name: 'dashboard',
  components: {
    UsersList
  },
  
}
</script>