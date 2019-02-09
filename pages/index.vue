<template>
  <section class="d-flex flex-column align-items-center justify-content-center text-center">
    <section class="tagline align-self-stretch full-h d-flex flex-column justify-content-center">
      <h1
        class="title text-base">
        Timeman
      </h1>
      <h2 class="subtitle text-base">
        for time management
      </h2>
    </section>
    <section class="description full-h d-flex flex-column justify-content-center">
      <div>
        <p>Welcome, friend :)</p>
        <p class="text-justify">This web service was intended as a handy way to collect and analyse information about repetitive,
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
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.full-h {
  min-height: 100vh;
}

.tagline {
  background-color: #fff1dc;
  background-image: url('/img/sand-clock-vertical.jpg');
  background-size: cover;
  @media screen and (orientation: landscape or (min-width: $tablet-horizontal-min-width)) {
    background-image: url('/img/sand-clock-horizontal.jpg');
  }

  .text-base {
    background: rgba(17, 8, 4, 0.6);

    @media screen and (min-width: $tablet-horizontal-min-width) {
      background: linear-gradient(
        to right,
        rgba(39, 19, 7, 0) 20%,
        rgba(39, 19, 7, 0.4) 30%,
        rgba(17, 8, 4, 0.6) 40%,
        rgba(17, 8, 4, 0.6) 60%,
        rgba(39, 19, 7, 0.4) 70%,
        rgba(39, 19, 7, 0) 80%
      );
    }
  }
  .title {
    font-family: 'Quicksand', sans-serif;
    display: block;
    font-weight: 300;
    font-size: 60px;
    color: #c5dbf2;
    letter-spacing: 1px;
    margin-bottom: 0;
    @media screen and (min-width: $tablet-min-width) {
      font-size: 80px;
    }
    @media screen and (min-width: $hd-min-width) {
      font-size: 100px;
    }
  }

  .subtitle {
    font-family: 'Quicksand', sans-serif;
    font-weight: 300;
    font-size: 30px;
    color: #9db2c0;
    word-spacing: 5px;
    padding-bottom: 15px;
    @media screen and (min-width: $tablet-min-width) {
      font-size: 37px;
    }
    @media screen and (min-width: $hd-min-width) {
      font-size: 42px;
    }
  }
}

.description {
  max-width: 500px;
  padding: 50px 20px;
  p {
    font-size: 18px;
  }
  .links {
    padding-top: 15px;
    a {
      font-weight: 300;
      font-size: 22px;
    }
  }
}
</style>
