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
import auth0 from '~/assets/js/auth0Impl';

export default {
  name: 'AuthCallback',
  created() {
    if (auth0.checkForEmailError()) {
      this.$router.push('email-not-verified');
    }
  },
};
</script>

<style scoped>
</style>
