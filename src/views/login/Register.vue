<template>
  <div class="container">
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
              </div>
              <form @submit.prevent="onSubmit">
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="text"
                      v-model="user.firstName"
                      placeholder="First Name"
                      name="firstName"
                      class="form-control"
                    >
                  </div>
                  <div class="col-sm-6">
                    <input
                      type="text"
                      v-model="user.lastName"
                      placeholder="Last Name"
                      name="lastName"
                      class="form-control"
                    >
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    v-model="email"
                    v-validate="'required|email'"
                    placeholder="Email"
                    name="email"
                    class="form-control"
                  >
                  <span>{{ errors.first('email') }}</span>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    v-model="user.username"
                    placeholder="Username"
                    name="username"
                    class="form-control"
                  >
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    v-model="user.password"
                    placeholder="Password"
                    name="password"
                    class="form-control"
                  >
                </div>
                <button class="btn btn-primary">Register</button>
                <!-- <img
                  v-show="status.registering"
                  src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                >-->
                <router-link to="/login" class="btn btn-link">Cancel</router-link>
              </form>
              <hr>
              <div class="text-center">
                <router-link to="forgotpass" class="small">Forgot Password?</router-link>
              </div>
              <div class="text-center">
                <router-link to="/" class="small">Already have an account? Login!</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../axios-auth";

export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
      },
      terms: false
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        username: this.user.username,
        password: this.user.password,
        terms: this.terms
      };
      console.log(formData);
      this.$store.dispatch("signup", formData);
      // this.$router.push("/");
    }
  }
};
</script>

