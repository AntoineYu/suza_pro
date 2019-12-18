<template>
  <div id="acceuil">
    <nav-bar class="acceuil-nav"><div slot="center">SUZA</div></nav-bar>
    <acceuil-swiper></acceuil-swiper>
    <!-- <acceuil-feature></acceuil-feature> -->
    <tab-control :titles="['bon marché', 'populaire', 'luxe']"
    @tabClick="pTabClick"></tab-control>
    <goods-list :cgoods="showGoods"></goods-list>
  </div>
</template>
<script>
import AcceuilSwiper from 'views/acceuil/childComps/AcceuilSwiper'
import AcceuilFeature from './childComps/AcceuilFeature'
import TabControl from 'components/content/tabcontrol/TabControl'
import NavBar from 'components/common/navbar/NavBar'
import GoodsList from 'components/content/goods/GoodsList'
import {getData, getGoodsData} from 'network/acceuil' 
export default {
    name: 'Acceuil',
    components: {
      AcceuilSwiper,
      AcceuilFeature,
      TabControl,
      NavBar,
      GoodsList
    },
    data() {
      return {
        goods: {
          'low': {page: 0, list: []},
          'middle': {page: 0, list: []},
          'high': {page: 0, list: []}
        },
        currentType: 'low'
      }
    },
    created() {
      // this.getAcceuilGoodsData('low')
      // this.getAcceuilGoodsData('middle')
      // this.getAcceuilGoodsData('high')
      this.getAcceuilGoodsData('low')
      setTimeout(() => {
        this.getAcceuilGoodsData('middle')
        setTimeout(() => {
          this.getAcceuilGoodsData('high')
        }, 500)
      }, 500)
    },
    methods: {
      pTabClick(index) {
        switch(index) {
          case 0:
            this.currentType = 'low'
            break
          case 1:
            this.currentType = 'middle'
            break
          case 2:
            this.currentType = 'high'
            break
        }
      },
      getAcceuilGoodsData(type) {
        let page = this.goods[type].page + 1
        getGoodsData(type, page).then(res => {
          this.goods[type].list.push(...res)
          this.goods[type].page = page
          console.log(res)
        })
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    }
}
</script>
<style scoped>
  #acceuil {
    padding-top: 44px;
    position: relative;
  }

  .acceuil-nav {
    background-color: black;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
</style>