<template>
  <div id="acceuil">
    <nav-bar class="acceuil-nav"><div slot="center">SUZA</div></nav-bar>
    <acceuil-swiper></acceuil-swiper>
    <!-- <acceuil-feature></acceuil-feature> -->
  </div>
</template>
<script>
import AcceuilSwiper from 'views/acceuil/childComps/AcceuilSwiper'
import AcceuilFeature from './childComps/AcceuilFeature'
import NavBar from 'components/common/navbar/NavBar'
import {getData} from 'network/acceuil' 
export default {
    name: 'Acceuil',
    components: {
      AcceuilSwiper,
      AcceuilFeature,
      NavBar
    },
    data() {
      return {
        banners: []
      }
    },
    created() {
      this.getAcceuilData()
    },
    methods: {
      getAcceuilData() {
        getData().then(res => {
          this.banners = res
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