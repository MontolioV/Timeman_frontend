<template>
  <div class="d-flex flex-column">
    <TimeIntervalStarter/>
    <TimersList :time-intervals="timeIntervals"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TimersList from '../components/timeInterval/TimersList';
import TimeIntervalStarter from '../components/timeInterval/TimerMaker';
export default {
  name: 'Timers',
  components: { TimeIntervalStarter, TimersList },
  middleware: 'auth',
  computed: {
    ...mapGetters({
      timeIntervals: 'Intervals/getIntervals',
    }),
  },
  watchQuery: ['tags'],
  asyncData({ store, route }) {
    store.dispatch('Intervals/fetchTimeIntervals', route.query);
    return {};
  },
};
</script>

<style scoped>
</style>
