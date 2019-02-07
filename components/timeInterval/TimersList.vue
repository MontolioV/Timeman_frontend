<template>
  <section class="d-flex flex-row flex-wrap justify-content-between">
    <TimeInterval 
      v-for="timeInterval in timeIntervals"
      :key="timeInterval._id"
      :time-interval="timeInterval"
      :current-time="currentTime"
      class="timer"/>
    <div class="filler flex-fill"/>
  </section>
</template>

<script>
import TimeInterval from './Timer';
export default {
  name: 'TimeIntervals',
  components: { TimeInterval },
  props: {
    timeIntervals: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentTime: new Date().getTime(),
    };
  },
  created() {
    setInterval(() => {
      this.currentTime = new Date().getTime();
    }, 1000);
  },
};
</script>

<style scoped lang="scss">
.timer {
  margin: 15px;
  width: 100%;
  min-width: 280px;
  @media screen and (min-width: $tablet-min-width) {
    width: 45%;
  }
  @media screen and (min-width: $tablet-horizontal-min-width) {
    width: 30%;
  }
  @media screen and (min-width: $hd-min-width) {
    width: 22%;
  }
  @media screen and (min-width: $full-hd-min-width) {
    max-width: 300px;
  }
}
.filler {
  min-width: 400px;
}
</style>
