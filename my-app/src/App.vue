<template>
  <div id="app">
      <ul class="nav nav-pills justify-content-center">
        <router-link class='nav-link' tag='li' to='/'>Users</router-link>
        <router-link class='nav-link' tag='li' to='/add'>Add</router-link>
        <router-link class='nav-link' tag='li' to='/edit'>Edit</router-link>
      </ul>
    <router-view class="container" />
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
