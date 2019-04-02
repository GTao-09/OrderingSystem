<template>
  <div class="Registered container">
    <div class="row mt-3">
      <div class="col-md-12 col-lg-12">
        <div class="card">
          <div class="card-body">
            <img src="../assets/icon.png" alt="图片" >
              <form @submit.prevent="formSubmit">
                <div class="form-group">
                  <label for="exampleInputEmail1">邮箱</label>
                  <input v-model="formEmail" required type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">密码</label>
                  <input v-model="inputPassword" required type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="form-group">
                  <label for="confirmPassword1">确认密码</label>
                  <input v-model="confirmPassword" required type="password" class="form-control" id="confirmPassword1" placeholder="ConfirmPassword">
                </div>
                <button type="submit" class="btn btn-primary btn-block">注册</button>
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
  name: 'Registered',
  data () {
    return {
      formEmail: '',
      inputPassword: '',
      confirmPassword: ''
    }
  },
  methods: {
    formSubmit () {
      const testinputPassword = this.inputPassword.trim()
      if (!testinputPassword) {
        alert('密码不能为空!')
        return
      }
      if (this.inputPassword !== this.confirmPassword) {
        alert('两次密码不一致!')
        return
      }
      let Infromation = {
        formEmail: this.formEmail,
        inputPassword: this.inputPassword,
        confirmPassword: this.confirmPassword
      }
      axios.post('http://localhost:3000/posts', Infromation)
        .then(res => {})
      this.formEmail = ''
      this.inputPassword = ''
      this.confirmPassword = ''
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
