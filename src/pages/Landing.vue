<template>
  <div class="Landing container"></div>
</template>

<script>
export default {
  name: 'Landing'
}
</script>
<template>
  <div class="Landing container">
    <div class="row mt-3">
      <div class="col-md-12 col-lg-12">
        <div class="card">
          <div class="card-body">
            <img src="../assets/icon.png" alt="图片" >
              <form @submit.prevent="landingSubmit">
                <div class="form-group">
                  <label for="exampleInputEmail1">邮箱</label>
                  <input v-model="landingEmail" required type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">密码</label>
                  <input v-model="landingPassword" required type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-success btn-block">登录</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Landing',
  data () {
    return {
      landingEmail: '',
      landingPassword: ''
    }
  },
  methods: {
    landingSubmit () {

    }
  }
}
</script>

<style lang="stylus" scoped>
.card-body
  img
    margin: 0 auto;
    display: block;
</style>
