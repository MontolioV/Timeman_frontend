<template>
  <div class="timer-starter">
    <div>
      <b-btn
        v-b-modal.timerStarterModal
        :block="true"
        size="lg"
        variant="primary">Start new timer</b-btn>

      <!-- Modal Component -->
      <b-modal 
        id="timerStarterModal" 
        title="New timer settings">

        <TagManager :tags-arr="newTimeInterval.tags"/>

        <div
          slot="modal-footer"
          class="w-100">
          <b-btn
            class="float-right"
            variant="primary"
            @click="createInterval(newTimeInterval)">
            Start
          </b-btn>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import TagManager from '../TagManager';
import moment from 'moment';
import { mapActions } from 'vuex';
export default {
  name: 'TimeIntervalStarter',
  components: { TagManager },
  data() {
    return {
      newTimeInterval: {
        tags: [
          moment().format('YYYY'),
          moment().format('MM.YYYY'),
          moment().format('DD.MM.YYYY'),
        ],
      },
    };
  },
  methods: {
    ...mapActions({
      createInterval: 'Intervals/createInterval',
    }),
  },
};
</script>

<style scoped>
.timer-starter {
  margin: 10px;
}
</style>
