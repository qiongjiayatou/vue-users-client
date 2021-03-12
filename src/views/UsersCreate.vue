<template>
  <div class="container">
    <div class="row justify-content-center ">
      <div class="col-12 col-md-8">

        <h1>Add User</h1>

        <div v-if="success" class="alert alert-success">
            Added successfully!
        </div>

        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <input
              v-model="form.first_name"
              type="text"
              :class="[
                'form-control',
                form.errors.has('first_name') ? 'is-invalid' : '',
              ]"
              placeholder="First Name"
            />
            <span
              v-if="form.errors.has('first_name')"
              class="invalid-feedback d-inline"
              role="alert"
            >
              <strong>{{ form.errors.get("first_name") }}</strong>
            </span>
          </div>

          <div class="form-group">
            <input
              v-model="form.last_name"
              type="text"
              :class="[
                'form-control',
                form.errors.has('last_name') ? 'is-invalid' : '',
              ]"
              placeholder="Last Name"
            />
            <span
              v-if="form.errors.has('last_name')"
              class="invalid-feedback d-inline"
              role="alert"
            >
              <strong>{{ form.errors.get("last_name") }}</strong>
            </span>
          </div>

          <div class="form-group">
            <input
              v-model="form.patronymic"
              type="text"
              :class="[
                'form-control',
                form.errors.has('patronymic') ? 'is-invalid' : '',
              ]"
              placeholder="Patronymic"
            />
            <span
              v-if="form.errors.has('patronymic')"
              class="invalid-feedback d-inline"
              role="alert"
            >
              <strong>{{ form.errors.get("patronymic") }}</strong>
            </span>
          </div>

          <div class="form-group">
            <input
              v-model="form.phone"
              type="text"
              :class="[
                'form-control',
                form.errors.has('phone') ? 'is-invalid' : '',
              ]"
              placeholder="Phone"
            />
            <span
              v-if="form.errors.has('phone')"
              class="invalid-feedback d-inline"
              role="alert"
            >
              <strong>{{ form.errors.get("phone") }}</strong>
            </span>
          </div>

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
            <button type="submit" class="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Form from '../core/Form'
import axios from 'axios'

export default {
  data() {
    return {
      form: new Form({
        first_name: "",
        last_name: "",
        patronymic: "",
        phone: "",
        email: "",
      }),
      success: false
    }
  },
  methods: {
      onSubmit() {
          axios.post('users', this.form.data())
          .then(response => {
            //   console.log(response)
              this.success = true
              this.form.onSuccess(response)
          })
          .catch(error => {
              this.form.onFail(error.response.data.errors)
              this.success = false
            })
      }
  }
};
</script>