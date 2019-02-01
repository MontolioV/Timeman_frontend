<template>
  <section class="d-flex flex-row flex-wrap">
    <TimeInterval 
      v-for="timeInterval in timeIntervals"
      :key="timeInterval._id"
      :time-interval="timeInterval"
      :current-time="currentTime"
      class="timer"/>
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
    }, 500);
  },
};
</script>

<style scoped>
.timer {
  margin: 10px;
  width: 300px;
}
</style>
