<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <nuxt-link 
      :to="{name:'index'}"
      class="navbar-brand">Timeman</nuxt-link>

    <div 
      id="navbarRouting"
      class="collapse navbar-collapse order-1">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <nuxt-link
            :to="{name:'users'}"
            class="nav-link">Users</nuxt-link>
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
          <p style="color: red">{{ authenticated }}</p>
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
import auth0 from '~/assets/auth/auth0Service.js';

export default {
  name: 'Navbar',
  data() {
    return {
      authenticated: auth0.authenticated,
    };
  },
  created() {
    auth0.authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated;
    });

    if (auth0.getAuthenticatedFlag() === 'true') {
      console.log('auth0.getAuthenticatedFlag()');
      auth0.renewSession();
      console.log('this.authenticated ' + this.authenticated);
      console.log('authState.authenticated ' + auth0.authenticated);
    }
  },
  methods: {
    login() {
      auth0.login();
      this.$router.push('/');
    },
    logout() {
      auth0.logout();
    },
  },
};
</script>

<style scoped>
</style>
