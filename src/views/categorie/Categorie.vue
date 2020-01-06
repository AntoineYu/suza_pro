<template>
  <div class="category">
    <nav-bar class="category-nav-bar">
      <div slot="center">Catégorie</div>
    </nav-bar>
    <slide-bar :slide-bar-list="categoryList"></slide-bar>
    <!-- <scroll class="content">
      <goods-list :cgoods="showGoods"></goods-list>
    </scroll> -->
  </div>
</template>
<script>
import SlideBar from "./childComps/SlideBar"

import NavBar from "@/components/common/navbar/NavBar"
import GoodsList from "@/components/content/goods/GoodsList"

import {getCategory, getProByCat} from "@/network/categorie"

export default {
    name: 'Categorie',
    components: {
      SlideBar,
      NavBar,
      GoodsList
    },
    data() {
      return {
        categoryList: [],
        goods: {'page': 0, 'list': []}
      }
    },
    computed: {
      showGoods() {
        return this.goods.list
      }
    },
    methods: {
      getCategory() {
        getCategory().then(res => {
          this.categoryList = res
        })
      },
      getGoodsData(category) {
        this.goods = {'page': 0, 'list': []}
        getProByCat(category, 1).then(res => {
          this.goods.list.push(...res)
          this.goods.page = 1
          // console.log(this.goods.list);
        })
      },
      updateGoodsData(category) {
        let page = this.goods['page'] + 1
        getProByCat(category, page).then(res => {
          this.goods.list.push(...res)
          this.goods.page += 1
        })
      }
    },
    created() {
      this.getCategory()
      this.$bus.$on('getGoods', value => {
        this.getGoodsData(value)
      })
    }
}
</script>
<style scoped>
  .category-nav-bar {
    font-weight: 600;
    color: white;
    background-color: var(--color-tint);
  }
</style>