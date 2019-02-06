<template>
  <b-navbar 
    toggleable="md"
    type="dark"
    variant="dark">
    <b-navbar-toggle target="nav_collapse"/>
    <b-navbar-brand :to="{name:'index'}">Timeman</b-navbar-brand>
    <b-collapse 
      id="nav_collapse" 
      is-nav>
      <b-navbar-nav>
        <b-nav-item 
          :active="$route.name === 'timers'"
          :to="{name:'timers'}">Timers</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown 
          v-if="isLogged" 
          right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            {{ $auth.user.nickname }}
          </template>
          <b-dropdown-item @click="logout">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item
          v-else
          right
          @click="login">Login</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
