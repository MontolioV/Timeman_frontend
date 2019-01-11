<template>
  <section>
    <ul class="users-list d-flex flex-wrap">
      <User 
        v-for="user in users" 
        :key="user._id" 
        :user="user"/>
    </ul>
  </section>
</template>

<script>
import User from './User';
export default {
  name: 'Users',
  components: {
    User,
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.users-list {
  list-style: none;
  justify-content: space-between;
}
</style>
