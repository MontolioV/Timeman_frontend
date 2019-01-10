<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <nuxt-link 
      :to="{name:'index'}"
      class="navbar-brand">Timeman</nuxt-link>

    <div 
      id="navbarRouting"
      class="collapse navbar-collapse order-1">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <nuxt-link
            :to="{name:'users'}"
            class="nav-link">Users</nuxt-link>
        </li>
      </ul>
    </div>
    <div
      id="navbarSpacer"
      class="collapse navbar-collapse order-2"/>
    <div
      id="navbarLogin"
      class="collapse navbar-collapse order-3">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <nuxt-link
            :to="{name:'index'}"
            class="nav-link">Login</nuxt-link>
        </li>
        <li class="nav-item active">
          <nuxt-link
            :to="{name:'index'}"
            class="nav-link">Logout</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
</style>
