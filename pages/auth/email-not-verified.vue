<template>
  <section class="fill d-flex flex-column justify-content-center align-items-center">
    <h1>Please, verify your email and re login</h1>
    <p>or</p>
    <b-button 
      size="lg" 
      variant="primary"
      @click="logout">Logout</b-button>
  </section>
</template>

<script>
export default {
  name: 'EmailNotVerified',
  methods: {
    logout() {
      this.$auth.logoutAuth0();
    },
  },
};
</script>

<style scoped>
</style>
