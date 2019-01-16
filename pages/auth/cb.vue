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
export default {
  name: 'AuthCallback',
};
</script>

<style scoped>
</style>
