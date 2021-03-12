<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
    <!-- <a class="navbar-brand" href="#">Navbar</a> -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <template v-if="authenticated">
          <li>
            <router-link :to="{ name: 'dashboard' }" class="nav-link"
              >Dashboard</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'userscreate' }" class="nav-link"
              >Add User</router-link
            >
          </li>
        </template>
        <li v-else class="nav-item">
          <router-link :to="{ name: 'home' }" class="nav-link"
            >Home</router-link
          >
        </li>
      </ul>

      <span v-if="authenticated" class="navbar-text mr-3">
        {{ user.full_name }}
      </span>
      <ul class="navbar-nav">
        <template v-if="authenticated">
          <li>
            <a href="#" @click.prevent="signOut" class="nav-link">Sign Out</a>
          </li>
        </template>
        <template v-else>
          <li>
            <router-link :to="{ name: 'signup' }" class="nav-link"
              >Sign Up</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'signin' }" class="nav-link"
              >Sign In</router-link
            >
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  methods: {
    ...mapActions({
      signOutAction: "auth/signOut",
    }),

    signOut() {
      this.signOutAction().then(() => {
        this.$router.replace({
          name: "home",
        });
      });
    },
  },
};
</script>