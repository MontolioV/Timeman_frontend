<template>
  <section class="container d-flex flex-column align-items-center justify-content-center">
    <div>
      <div class="titles d-flex flex-column align-items-center justify-content-center">
        <h1
          class="title">
          Timeman
        </h1>
        <h2 class="subtitle">
          for time management
        </h2>
      </div>
      <div class="description">
        <p>Welcome, friend :)</p>
        <p>This web service was intended as a handy way to collect and analyse information about repetitive,
        time consuming activities in cloud. How much time do you spend on work during a month?
        Or on shopping routine?</p>
        <p>Project is under development. Feel free to visit my Github repos if you have an idea or find a bug.</p>
      </div>
      <div class="links d-flex justify-content-around">
        <a
          href="https://github.com/MontolioV/Timeman_frontend"
          target="_blank"
          class="button--grey">Frontend repo</a>
        <a
          href="https://github.com/MontolioV/Timeman_backend"
          target="_blank"
          class="button--green">Backend repo</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.container {
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.titles {
  height: 100vh;
}

.description {
  max-width: 500px;
  p {
    font-size: 18px;
  }
}

.links {
  padding-top: 15px;
  padding-bottom: 100px;
  a {
    font-weight: 300;
    font-size: 22px;
  }
}
</style>
