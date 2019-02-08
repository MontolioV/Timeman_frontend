<template>
  <div class="page-container d-flex flex-column">
    <Navbar/>
    <nuxt class="flex-fill"/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default {
  components: {
    Footer,
    Navbar,
  },
};
</script>
<style>
.page-container {
  min-height: 100vh;
}
</style>
