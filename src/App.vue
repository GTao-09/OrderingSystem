<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view/>
  </div>
</template>

<script>
import Header from './pages/Header'
export default {
  name: 'App',
  components: {
    AppHeader: Header
  }
}
</script>

<style lang="stylus">

</style>
