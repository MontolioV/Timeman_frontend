<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-2">
        <h2>Status: </h2>
      </div>
      <div class="col-10">
        <h2>{{ backendResponse.status }}</h2>
      </div>
      <div class="col-2">
        <h2>Data:</h2>
      </div>
      <div class="col-10">
        <h2>{{ backendResponse.data }}</h2>
      </div>
      <div class="col-2">
        <h2>Error:</h2>
      </div>
      <div class="col-10">
        <h2>{{ backendResponse.message }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Backend',
  async asyncData({ $axios }) {
    const backendResponse = await $axios.get('/rs/').catch(err => {
      return err;
    });
    return {
      backendResponse,
    };
  },
};
</script>

<style scoped>
</style>
