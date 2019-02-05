<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <nuxt-link 
      :to="{name:'index'}"
      class="navbar-brand">Timeman</nuxt-link>

    <div 
      id="navbarRouting"
      class="collapse navbar-collapse order-1">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link
            :to="{name:'timers'}"
            class="nav-link">Timers</nuxt-link>
        </li>
      </ul>
    </div>
    <div
      id="navbarSpacer"
      class="collapse navbar-collapse order-2"/>
    <div
      id="navbarLogin"
      class="collapse navbar-collapse order-3">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <p style="color: red">{{ isLogged }}</p>
        </li>
        <li class="nav-item active">
          <button
            @click="login">Login</button>
        </li>
        <li class="nav-item active">
          <button
            @click="logout">Logout</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    isLogged() {
      return this.$auth.loggedIn;
    },
  },
  methods: {
    login() {
      this.$auth.loginWith('auth0');
    },
    logout() {
      this.$auth.logoutAuth0();
    },
  },
};
</script>

<style scoped>
</style>
