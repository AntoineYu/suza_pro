<template>
  <div class="category">
    <nav-bar class="category-nav-bar">
      <div slot="center">Catégorie</div>
    </nav-bar>
    <slide-bar :slide-bar-list="categoryList"></slide-bar>
    <scroll class="content" :pullUpLoad="true" @pullingUp="loadMore" ref="scroll">
      <goods-list :cgoods="showGoods"></goods-list>
    </scroll>
  </div>
</template>
<script>
import SlideBar from "./childComps/SlideBar"

import NavBar from "components/common/navbar/NavBar"
import Scroll from "components/common/scroll/Scroll"
import GoodsList from "components/content/goods/GoodsList"

import {getCategory, getProByCat} from "network/categorie"

export default {
    name: 'Categorie',
    components: {
      SlideBar,
      NavBar,
      Scroll,
      GoodsList
    },
    data() {
      return {
        categoryList: [],
        goods: {'page': 0, 'list': []},
        currentItem: ''
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
          this.$refs.scroll.finishPullUp()
        })
      },
      loadMore() {
        this.updateGoodsData(this.currentItem)
      }
    },
    created() {
      this.getCategory()
      this.$bus.$on('getGoods', value => {
        this.getGoodsData(value)
        this.currentItem = value
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

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 100px;
    right: 0;
  }
</style>