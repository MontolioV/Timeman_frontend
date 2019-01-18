<template>
  <div/>
</template>

<script>
export default {
  name: 'Redirect',
  created() {
    this.$auth.loginWith('auth0');
  },
};
</script>

<style scoped>
</style>
