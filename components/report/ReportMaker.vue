<template>
  <section class="container">
    <div class="row">
      <div class="col-sm col-md-4 pl-md-0 border-right">
        <h3>Report options</h3>
        <TagManager
          :tags-arr="tags"
          form-label="Add tag for filtering:"
          class="mb-2"/>
        <b-form-group 
          label="Query mode:" >
          <b-form-radio-group
            v-model="queryMode"
            :options="queryModeOptions"
            stacked/>
        </b-form-group>
        <b-button
          :block="true"
          variant="primary"
          @click="makeReport">Make report</b-button>
      </div>
      <div class="col-sm col-md-8 mt-5 mt-md-0 pr-md-0">
        <div 
          v-if="showGuide" 
          class="h-100 row justify-content-center align-content-center">
          <h2>Add filtering tags and make report</h2>
        </div>
        <div
          v-else-if="!reportIsReady"
          class="h-100 row justify-content-center align-content-center">
          <div
            class="spinner-border"
            role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div v-else>
          <h3>Report</h3>
          <div class="row m-2 m-md-0">
            <div
              v-for="(reportKey,idx) of Object.keys(reportLabels)"
              :key="reportKey"
              :class="{'mb-2 mb-md-0': !((idx+1) % 3)}"
              class="col-md-12 col-lg-4 pt-1 pb-1 border">
              <div class="h-100 d-flex flex-column justify-content-between">
                <p>
                  {{ reportLabels[reportKey] }}
                </p>
                <p class="align-self-center">
                  {{ reportValues[reportKey] }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment';
import formatterFn from '~/assets/js/durationFormatter.js';
import { mapGetters, mapActions } from 'vuex';
import TagManager from '../tag/TagManager';
export default {
  name: 'ReportMaker',
  components: { TagManager },
  data() {
    return {
      showGuide: true,
      reportIsReady: false,
      reportValues: {},
      reportLabels: {
        totalTimers: 'Total timers count:',
        runningTimers: 'Running timers count:',
        stoppedTimers: 'Stopped timers count:',
        totalDuration: 'Total duration of all timers:',
        runningTimersDuration: 'Total duration of running timers:',
        stoppedTimersDuration: 'Total duration of stopped timers:',
        averageDurationPerTimer: 'Average duration of all timers:',
        averageDurationPerRunningTimer: 'Average duration of running timers:',
        averageDurationPerStoppedTimer: 'Average duration of stopped timers:',
        minDurationPerTimer: 'Minimal duration of all timers:',
        minDurationPerRunningTimer: 'Minimal duration of running timers:',
        minDurationPerStoppedTimer: 'Minimal duration of stopped timers:',
        maxDurationPerTimer: 'Maximal duration of all timers:',
        maxDurationPerRunningTimer: 'Maximal duration of running timers:',
        maxDurationPerStoppedTimer: 'Maximal duration of stopped timers:',
      },
      tags: [moment().format('YYYY.MM')],
      queryMode: '$all',
      queryModeOptions: [
        { text: 'All listed tags', value: '$all' },
        { text: 'Any of listed tags', value: '$in' },
      ],
    };
  },
  computed: {
    ...mapGetters({
      timeIntervals: 'Intervals/getIntervals',
    }),
  },
  methods: {
    ...mapActions({
      fetchTimeIntervals: 'Intervals/fetchTimeIntervals',
    }),
    makeReport() {
      this.reportIsReady = false;
      this.showGuide = false;
      const tagsQueryOptions = {};
      tagsQueryOptions[this.queryMode] = this.tags;
      this.fetchTimeIntervals({ tags: tagsQueryOptions }).then(() => {
        const currentTimeStamp = new Date().getTime();
        const timeIntervalsAll = this.timeIntervals;
        const timeIntervalsRunning = timeIntervalsAll.filter(
          value => !value.end
        );
        const timeIntervalsStopped = timeIntervalsAll.filter(
          value => !!value.end
        );
        const report = {};

        report.totalTimers = timeIntervalsAll.length;
        report.runningTimers = timeIntervalsRunning.length;
        report.stoppedTimers = timeIntervalsStopped.length;

        report.runningTimersDuration = timeIntervalsRunning.reduce(
          (acc, timeInterval) => {
            return acc + (currentTimeStamp - timeInterval.start);
          },
          0
        );
        report.stoppedTimersDuration = timeIntervalsStopped.reduce(
          (acc, timeInterval) => {
            return acc + (timeInterval.end - timeInterval.start);
          },
          0
        );
        report.totalDuration =
          report.runningTimersDuration + report.stoppedTimersDuration;

        report.averageDurationPerTimer =
          report.totalDuration / report.totalTimers || 0;
        report.averageDurationPerRunningTimer =
          report.runningTimersDuration / report.runningTimers || 0;
        report.averageDurationPerStoppedTimer =
          report.stoppedTimersDuration / report.stoppedTimers || 0;

        report.minDurationPerRunningTimer = timeIntervalsRunning.reduce(
          (acc, timeInterval) => {
            const duration = currentTimeStamp - timeInterval.start;
            return Math.min(acc, duration);
          },
          !report.runningTimers ? 0 : Number.MAX_SAFE_INTEGER
        );
        report.minDurationPerStoppedTimer = timeIntervalsStopped.reduce(
          (acc, timeInterval) => {
            const duration = timeInterval.end - timeInterval.start;
            return Math.min(acc, duration);
          },
          !report.stoppedTimers ? 0 : Number.MAX_SAFE_INTEGER
        );
        report.minDurationPerTimer = Math.min(
          report.minDurationPerRunningTimer,
          report.minDurationPerStoppedTimer
        );

        report.maxDurationPerRunningTimer = timeIntervalsRunning.reduce(
          (acc, timeInterval) => {
            const duration = currentTimeStamp - timeInterval.start;
            return Math.max(acc, duration);
          },
          0
        );
        report.maxDurationPerStoppedTimer = timeIntervalsStopped.reduce(
          (acc, timeInterval) => {
            const duration = timeInterval.end - timeInterval.start;
            return Math.max(acc, duration);
          },
          0
        );
        report.maxDurationPerTimer = Math.max(
          report.maxDurationPerRunningTimer,
          report.maxDurationPerStoppedTimer
        );

        [
          'totalDuration',
          'runningTimersDuration',
          'stoppedTimersDuration',
          'averageDurationPerTimer',
          'averageDurationPerRunningTimer',
          'averageDurationPerStoppedTimer',
          'minDurationPerTimer',
          'minDurationPerRunningTimer',
          'minDurationPerStoppedTimer',
          'maxDurationPerTimer',
          'maxDurationPerRunningTimer',
          'maxDurationPerStoppedTimer',
        ].forEach(value => {
          report[value] = formatterFn(report[value]);
        });

        this.reportValues = report;
        this.reportIsReady = true;
      });
    },
  },
};
</script>

<style scoped>
</style>
