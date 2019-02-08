<template>
  <section class="report-section">
    <ReportMaker/>
  </section>
</template>

<script>
import ReportMaker from '../components/report/ReportMaker';
export default {
  name: 'Report',
  components: { ReportMaker },
  middleware: 'auth',
};
</script>

<style scoped>
.report-section {
  padding: 20px 0;
}
</style>
