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
      axios.get('http://localhost:3000/posts')
        .then(res => {
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
            this.$router.push({ path: '/' })
          } else {
            alert('登陆失败')
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
