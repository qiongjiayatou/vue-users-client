<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8">
        
        <h1>Sign In</h1>

        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <input
              v-model="form.email"
              type="text"
              class="form-control"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <input
              v-model="form.password"
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapActions } from "vuex";

export default {
  name: "signIn",
  components: {},
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
      signIn: "auth/signIn",
    }),
    onSubmit() {
      this.signIn(this.form)
        .then(() => {
          this.$router.push({ name: "dashboard" });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>