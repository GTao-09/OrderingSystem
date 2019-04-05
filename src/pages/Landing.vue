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
  // beforeRouteEnter会在组件创建之前执行，所以this取不到值，用next回调来取
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      vm.$store.dispatch('userEmail', null)
    })
  },
  methods: {
    landingSubmit () {
      axios.get('http://localhost:3000/posts')
        .then(res => {
          // console.log(res)
          const resData = res.data
          let infromation = []
          for (let i in resData) {
            // console.log(resData[i])
            infromation.push(resData[i])
          }
          // console.log(infromation)
          let result = infromation.filter(element => {
            return element.formEmail === this.landingEmail && element.inputPassword === this.landingPassword
          })
          // console.log(result)
          if (result.length > 0 && result != null) {
            alert('登陆成功')
            this.$store.dispatch('userEmail', result[0].formEmail)
            // console.log(result[0].formEmail, 1)
            this.$router.push({ path: '/home' })
          } else {
            alert('登陆失败')
            this.$store.dispatch('userEmail', null)
          }
        })
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
