<template>
  <div class="Header container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="py-2" to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
      </router-link>
      <router-link class="navbar-brand addTitle" to="/">Hammer点餐系统</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'HomeLink'}">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'MenuLink'}">Menu</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'ManagementLink'}">Management</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'AboutLink'}">About</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li v-show="!this.getIslogin" class="nav-item">
            <router-link class="nav-link" :to="{name: 'LandingLink'}">Landing</router-link>
          </li>
          <li v-show="this.getIslogin" class="nav-link">{{ getEmail }}</li>
          <li v-show="this.getIslogin" class="nav-item">
            <router-link class="nav-link" :to="{name: 'LandingLink'}">[退出]</router-link>
          </li>
          <li v-show="!this.getIslogin" class="nav-item">
            <router-link class="nav-link" :to="{name: 'RegisteredLink'}">Registered</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapGetters(['getEmail', 'getIslogin'])
  }
}
</script>

<style lang="stylus" scoped>
.Header
  .navbar
    .addTitle
      margin-left 3px
</style>
