<template>
  <div 
    :class="{ 'timer-stopped': !!timeInterval.end }"
    class="timer-card d-flex flex-column justify-content-between">
    <div class="timer-info">
      <h4
        v-if="!timeInterval.end"
        class="text-primary">Running</h4>
      <h4
        v-else
        class="text-secondary">Stopped</h4>
      <p>Started at {{ startDate }}</p>
      <p v-if="timeInterval.end">Stopped at {{ endDate }}</p>
      <p>Duration {{ timePast }}</p>
    </div>
    <div class="timer-tags d-flex flex-wrap justify-content-between">
      <b-button 
        v-for="(tag,idx) of timeInterval.tags"
        :key="timeInterval._id+tag+idx"
        variant="outline-secondary"
        size="sm"
        class="tag-btn"
        @click="tagRouting(tag)">{{ tag }}</b-button>
    </div>
    <b-button
      v-if="!timeInterval.end"
      variant="primary"
      block="true"
      @click="stopThisTimer">Stop timer</b-button>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'TimeInterval',
  props: {
    timeInterval: {
      type: Object,
      required: true,
    },
    currentTime: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startDate() {
      return moment(this.timeInterval.start).format('HH:mm:ss DD.MM.YYYY');
    },
    endDate() {
      return moment(this.timeInterval.end).format('HH:mm:ss DD.MM.YYYY');
    },
    timePast() {
      let durationInMs = !this.timeInterval.end
        ? this.currentTime - this.timeInterval.start
        : this.timeInterval.end - this.timeInterval.start;
      return this.formatDuration(durationInMs);
    },
  },
  methods: {
    tagRouting(tag) {
      this.$router.push({ path: 'timers', query: { tag: tag } });
    },
    stopThisTimer() {
      console.log(this.timeInterval._id);
    },
    formatDuration(durationInMs) {
      const DAY_IN_MS = 86400000;
      const HOUR_IN_MS = 3600000;
      const MINUTE_IN_MS = 60000;
      const SECOND_IN_MS = 1000;
      const duration = {};
      let dur = durationInMs;
      const prepend0 = function(num) {
        return num < 10 ? '0' + num : num;
      };

      duration.d = Math.floor(dur / DAY_IN_MS);
      dur = dur % DAY_IN_MS;
      duration.h = prepend0(Math.floor(dur / HOUR_IN_MS));
      dur = dur % HOUR_IN_MS;
      duration.m = prepend0(Math.floor(dur / MINUTE_IN_MS));
      dur = dur % MINUTE_IN_MS;
      duration.s = prepend0(Math.floor(dur / SECOND_IN_MS));

      if (duration.d === 0) {
        return `${duration.h}:${duration.m}:${duration.s}`;
      } else {
        return `${duration.d}:${duration.h}:${duration.m}:${duration.s}`;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.timer-card {
  padding: 10px;
  background: white;
  border: 2px solid lightskyblue;
  border-radius: 5px;
  &.timer-stopped {
    background: #f5f5f5;
    border: 2px solid gray;
  }
  .timer-info {
  }
  .timer-tags {
  }
  .tag-btn {
    margin: 3px;
  }
  &:hover {
    font-weight: bold;
    border: 2px solid #72c0fa;
    &.timer-stopped {
      background: #f5f5f5;
      border: 2px solid #5d5d5d;
    }
  }
}
</style>
