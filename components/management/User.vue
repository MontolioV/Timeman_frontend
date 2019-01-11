<template>
  <li>
    <div class="user-container">
      <p>{{ user.login }}</p>
      <p>{{ user.email }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.user-container {
  display: inline-block;
  width: 150%;
  margin: 10px;
  padding: 0 20px;
  p {
    margin: 5px;
  }
}
</style>
