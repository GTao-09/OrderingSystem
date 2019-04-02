<template>
  <div class="about container">
    <div class="row mb-5">
      <div class="col-4">
        <!-- 导航 -->
        <div class="list-group">
          <router-link tag="li" class="nav-link" :to="{name: 'HistoryLink'}">
            <a class="list-group-item list-group-item-action">历史订单</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{name: 'ContactLink'}">
            <a class="list-group-item list-group-item-action">联系我们</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{name: 'OrderingGuideLink'}">
            <a class="list-group-item list-group-item-action">点餐文档</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{name: 'DelivertLink'}">
            <a class="list-group-item list-group-item-action">快递信息</a>
          </router-link>
        </div>
      </div>
      <div class="col-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
