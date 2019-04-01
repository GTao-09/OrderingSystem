<template>
<div>
  <div class="card text-dark bg-light mt-3">
    <div class="card-header">联系我们</div>
    <div class="card-body">
      <h4 class="card-title">联系我们</h4>
      <p class="card-text">3466085009@qq.com</p>

      <router-link :to="{name: 'PhoneLink'}">电话</router-link>
      <span style="margin-left: 10px;"></span>
      <router-link :to="{name: 'PersonNameLink'}">联系人</router-link>

      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'phone'
}
</script>

<style lang="stylus" scoped>

</style>
