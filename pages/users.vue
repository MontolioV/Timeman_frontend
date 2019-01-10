<template>
  <Users :users="users"/>
</template>

<script>
import Users from '../components/management/Users'

export default {
  components: {
    Users
  },
  async asyncData({ app }) {
    const response = await app.$axios.get('/rs/users')
    return {
      users: response.data
    }
  }
}
</script>

<style scoped>
</style>
