<template>
  <div id="acceuil">
    <nav-bar class="acceuil-nav"><div slot="center">SUZA</div></nav-bar>
    <acceuil-swiper></acceuil-swiper>
    <!-- <acceuil-feature></acceuil-feature> -->
    <tab-control :titles="['bon marché', 'populaire', 'luxe']"></tab-control>
    <goods-list :goods="goods"></goods-list>
  </div>
</template>
<script>
import AcceuilSwiper from 'views/acceuil/childComps/AcceuilSwiper'
import AcceuilFeature from './childComps/AcceuilFeature'
import TabControl from 'components/content/tabcontrol/TabControl'
import NavBar from 'components/common/navbar/NavBar'
import GoodsList from 'components/content/goods/GoodsList'
import {getData} from 'network/acceuil' 
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
        goods: []
      }
    },
    created() {
      this.getAcceuilData()
    },
    methods: {
      getAcceuilData() {
        getData().then(res => {
          this.goods = res
          //console.log(res)
        })
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
    z-index: 0;
  }
</style>