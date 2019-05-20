<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your mail address: {{ email }}</p>
    <button class="btn btn-danger" v-if="auth" @click="onLogout">Log Out</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  computed: {
    email() {
    return !this.$store.getters.user ? false: this.$store.getters.user.email;    
    }
  },
  created() {
    this.$store.dispatch("fetchUser");
  },
  methods: {
    onLogout(){
      this.$store.dispatch('logout')
    }
  },

};
</script>

<style scoped>
h1,
p {
  text-align: center;
}

p {
  color: red;
}
</style>