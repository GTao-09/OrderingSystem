<template>
  <div class="Management container">
    <div class="row">
      <div class="col-sm-12 col-md-8">
        <h3 class="text-muted my-5">添加食品</h3>
        <form @submit.prevent="addFood">
          <div class="form-group row">
            <label for="inputname" class="col-sm-2 col-md-2 col-form-label">物品名称</label>
            <div class="col-sm-10">
              <input v-model="newFood.name" type="text" class="form-control" id="inputname" placeholder="name">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-md-2 col-form-label" for="exampleFormControlTextarea1">物品描述</label>
            <div class="col-sm-10">
              <textarea v-model="newFood.description" class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputprice" class="col-sm-2 col-md-2 col-form-label">物品价格</label>
            <div class="col-sm-10">
              <input v-model="newFood.price" type="text" class="form-control" id="inputprice" placeholder="price">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputsize" class="col-sm-2 col-md-2 col-form-label">物品规格</label>
            <div class="col-sm-10">
              <input v-model="newFood.size" type="text" class="form-control" id="inputsize" placeholder="size">
            </div>
          </div>
          <div class="form-group row">
            <button class="btn btn-success btn-block">添加</button>
          </div>
        </form>
      </div>
      <div class="col-sm-12 col-md-4">
        <h3 class="text-muted my-5">管理</h3>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>品种</th>
              <th>删除</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in foodInfo" :key="item.id">
              <td>{{item.name}}{{item.size}}斤</td>
              <td>
                <button @click="deleteFood(item.id)" class="btn btn-outline-danger btn-sm">&times;</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Management',
  data () {
    return {
      newFood: {
        name: '',
        description: '',
        price: '',
        size: ''
      },
      foodInfo: []
    }
  },
  methods: {
    addFood () {
      // console.log(this.newFood)
      this.$axios.post('http://localhost:3001/posts', this.newFood)
        .then(res => {
          this.$router.push({ name: 'MenuLink' })
        })
    },
    getFoodInfo () {
      this.$axios.get('http://localhost:3001/posts')
        .then(res => {
          this.foodInfo = res.data
        })
    },
    deleteFood (index) {
      this.$axios.delete(`http://localhost:3001/posts/${index}`)
        .then(res => {
          alert('删除成功')
        })
    }
  },
  mounted () {
    this.getFoodInfo()
  },
  updated () {
    this.getFoodInfo()
  }
}
</script>
