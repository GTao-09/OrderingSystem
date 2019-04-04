<template>
  <div class="Menu container">
    <div class="row">
      <div class="col-sm-12 col-md-8">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">物品</th>
              <th scope="col">价格(￥)</th>
              <th scope="col">规格(斤)</th>
              <th scope="col">添加</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(food, index) in foodList" :key="index">
              <th scope="row">{{food.name}}</th>
              <td>{{food.price}}</td>
              <td>{{food.size}}</td>
              <td><button @click="addShopCar(food)" class="btn btn-sm btn-outline-success">+</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 购物车 -->
      <div class="col-sm-12 col-md-4">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>数量</th>
              <th>品种</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in shoppingCartList" :key="index">
              <td>
                <button @click="decNumber(item)" class="btn btn-sm">-</button>
                <span>&nbsp;{{item.number}}&nbsp;</span>
                <button @click="addNumber(item)" class="btn btn-sm">+</button>
              </td>
              <td>{{item.name}}{{item.size}}斤</td>
              <td>￥ {{item.price * item.number}}</td>
            </tr>
          </tbody>
        </table>
        <p>总价:￥ {{total}}</p>
        <button class="btn btn-success btn-block">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  computed: {
    total () {
      let totalCount = 0
      for (let i in this.shoppingCartList) {
        totalCount += this.shoppingCartList[i].number * this.shoppingCartList[i].price
      }
      return totalCount
    }
  },
  data () {
    return {
      shoppingCartList: [],
      foodList: []
    }
  },
  methods: {
    addShopCar (food) {
      let addShop = {
        name: food.name,
        size: food.size,
        price: food.price,
        number: 1
      }
      if (this.shoppingCartList.length > 0) {
        let result = this.shoppingCartList.filter(element => {
          return element.name === food.name && element.size === food.size
        })
        if (result.length > 0 && result != null) {
          result[0].number++
        } else {
          this.shoppingCartList.push(addShop)
        }
      } else {
        this.shoppingCartList.push(addShop)
      }
      // console.log(this.shoppingCartList)
    },
    decNumber (item) {
      item.number--
      if (item.number <= 0) {
        item.number = 0
        this.shoppingCartList.splice(this.shoppingCartList.indexOf(item), 1)
      }
    },
    addNumber (item) {
      item.number++
    },
    getFoodList () {
      this.$axios.get('http://localhost:3001/posts')
        .then(res => {
          // console.log(res.data)
          this.foodList = res.data
        })
    }
  },
  mounted () {
    this.getFoodList()
  }
}
</script>
