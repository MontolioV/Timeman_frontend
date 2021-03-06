<template>
  <div 
    :class="{ 'timer-stopped': !!timeInterval.end }"
    class="timer-card d-flex flex-column justify-content-between">
    <div class="timer-info">
      <div class="d-flex justify-content-between">
        <h4
          v-if="!timeInterval.end"
          class="text-primary">Running</h4>
        <h4
          v-else
          class="text-secondary">Stopped</h4>
        <b-button
          variant="danger"
          @click="deleteThisTimer">
          <font-awesome-icon icon="trash-alt" />
        </b-button>
      </div>
      <p>Started at {{ startDate }}</p>
      <p v-if="timeInterval.end">Stopped at {{ endDate }}</p>
      <p>Duration {{ timePast }}</p>
    </div>
    <div class="timer-tags d-flex flex-wrap justify-content-between">
      <nuxt-link
        v-for="(tag,idx) of timeInterval.tags"
        :key="timeInterval._id+tag+idx"
        :to="{ name: 'timers', query: { tags: tag }}"
        class="tag-btn btn btn-outline-secondary btn-sm">{{ tag }}</nuxt-link>
    </div>
    <b-button
      v-if="!timeInterval.end"
      :block="true"
      class="stop-btn"
      variant="success"
      @click="stopThisTimer">Stop timer</b-button>
  </div>
</template>

<script>
import moment from 'moment';
import formatterFn from '~/assets/js/durationFormatter.js';
import { mapActions } from 'vuex';
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
      return formatterFn(durationInMs);
    },
  },
  methods: {
    ...mapActions({
      closeInterval: 'Intervals/closeInterval',
      deleteInterval: 'Intervals/deleteInterval',
    }),
    stopThisTimer() {
      this.closeInterval(this.timeInterval._id);
    },
    deleteThisTimer() {
      this.deleteInterval(this.timeInterval._id);
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
  &:hover {
    font-weight: bold;
    border: 2px solid #72c0fa;
    &.timer-stopped {
      background: #f5f5f5;
      border: 2px solid #5d5d5d;
    }
  }
  .timer-info {
  }
  .timer-tags {
  }
  .tag-btn {
    margin: 3px;
  }
  .stop-btn {
    margin-top: 5px;
  }
}
</style>
