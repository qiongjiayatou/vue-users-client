<template>
  <div class="container">
    <div class="row justify-content-center ">
      <div class="col-12 col-md-8">

        <h1>Sign Up</h1>

        <div v-if="success" class="alert alert-success">Signed Up Successfully!</div>

        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <input
              v-model="form.email"
              type="text"
              :class="[
                'form-control',
                form.errors.has('email') ? 'is-invalid' : '',
              ]"
              placeholder="Email"
            />
            <span
              v-if="form.errors.has('email')"
              class="invalid-feedback d-inline"
              role="alert"
            >
              <strong>{{ form.errors.get("email") }}</strong>
            </span>
          </div>

          <div class="form-group">
            <input
              v-model="form.password"
              type="password"
              :class="[
                'form-control',
                form.errors.has('password') ? 'is-invalid' : '',
              ]"
              placeholder="Password"
            />
            <span
              v-if="form.errors.has('password')"
              class="invalid-feedback d-inline"
              role="alert"
            >
              <strong>{{ form.errors.get("password") }}</strong>
            </span>
          </div>

          <div class="form-group">
            <button type="submit" class="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Form from "../core/Form";
import { mapActions } from "vuex";

export default {
  name: "signUp",
  components: {},
  data() {
    return {
      form: new Form({
        email: "",
        password: "",
      }),
      success: false
    };
  },
  methods: {
    ...mapActions({
      signUp: "auth/signUp",
    }),
    onSubmit() {
      axios
        .post("register", this.form.data())
        .then((response) => {

          // console.log(response);
          this.form.onSuccess(response.data)
          this.success = true
          this.$router.push({ name: "signin" });
        
        })
        .catch((error) => {
          // console.log(error);
          this.success = false
          this.form.onFail(error.response.data.errors);
        });
    },
  },
};
</script>