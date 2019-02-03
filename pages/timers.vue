<template>
  <div class="d-flex flex-column">
    <TimeIntervalStarter/>
    <TimersList :time-intervals="timeIntervals"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TimersList from '../components/timeInterval/TimersList';
import TimeIntervalStarter from '../components/timeInterval/TimerMaker';
export default {
  name: 'Timers',
  components: { TimeIntervalStarter, TimersList },
  computed: {
    ...mapGetters({
      timeIntervals: 'Intervals/getIntervals',
    }),
  },
  created() {
    this.fetchTimeIntervals();
  },
  methods: {
    ...mapActions({
      fetchTimeIntervals: 'Intervals/fetchTimeIntervals',
    }),
  },
};
</script>

<style scoped>
</style>
