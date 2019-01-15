<template>
  <section class="fill d-flex flex-column justify-content-center align-items-center">
    <h1 class="welcome-title">Processing...</h1>
    <div 
      class="spinner-border" 
      role="status">
      <span class="sr-only">Wait, please.</span>
    </div>
  </section>
</template>

<script>
import auth0Service from '~/assets/auth/auth0Service.js';

export default {
  name: 'AuthCallback',
  created() {
    auth0Service.handleAuthentication();
  },
};
</script>

<style scoped>
</style>
