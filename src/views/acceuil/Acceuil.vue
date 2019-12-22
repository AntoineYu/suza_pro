<template>
  <div id="acceuil">
    <nav-bar class="acceuil-nav"><div slot="center">SUZA</div></nav-bar>
    <tab-control ref="tabControl1" :titles="['bon marché', 'populaire', 'luxe']"
    @tabClick="pTabClick"
    class="tab-control" v-show="isTabFixed">
    </tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" 
    @scroll="contentScroll" :pull-up-load="true" 
    @pullingUp="loadMore">
      <acceuil-swiper @swiperImageLoad="swiperImageLoad"></acceuil-swiper>
      <!-- <acceuil-feature></acceuil-feature> -->
      <tab-control ref="tabControl2" :titles="['bon marché', 'populaire', 'luxe']"
      @tabClick="pTabClick">
      </tab-control>
      <goods-list :cgoods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show='isShowBackTop'></back-top>
  </div>
</template>
<script>
import AcceuilSwiper from 'views/acceuil/childComps/AcceuilSwiper'
import AcceuilFeature from './childComps/AcceuilFeature'

import TabControl from 'components/content/tabcontrol/TabControl'
import NavBar from 'components/common/navbar/NavBar'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/BackTop'

import {getData, getGoodsData} from 'network/acceuil' 
import {debounce} from 'common/utils'
import {itemListenerMixin, backtopMixin} from 'common/mixin'
export default {
    name: 'Acceuil',
    components: {
      AcceuilSwiper,
      AcceuilFeature,
      TabControl,
      NavBar,
      GoodsList,
      Scroll
    },
    data() {
      return {
        goods: {
          'low': {page: 0, list: []},
          'middle': {page: 0, list: []},
          'high': {page: 0, list: []}
        },
        currentType: 'low',
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    mixins: [itemListenerMixin, backtopMixin],
    created() {
      this.getAcceuilGoodsData('low')
      setTimeout(() => {
        this.getAcceuilGoodsData('middle')
        setTimeout(() => {
          this.getAcceuilGoodsData('high')
        }, 800)
      }, 800)
    },
    // mounted() {
      
    // },
    // actived() {
    //   this.$refs.scroll.scrollTo(0, this.saveY, 0)
    //   this.$refs.scroll.refresh()
    // },
    // deactived() {
    //   this.saveY = this.$refs.scroll.getCurrentY()
    // },
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
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
        this.$refs.scroll.scrollTo(0, 0, 0)
      },
      getAcceuilGoodsData(type) {
        let page = this.goods[type].page + 1
        getGoodsData(type, page).then(res => {
          this.goods[type].list.push(...res)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
          // console.log(res)
        })
      },
      contentScroll(position) {
        this.listenShowBackTop(position)
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadMore() {
        this.getAcceuilGoodsData(this.currentType)
      },
      swiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
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
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }

  .acceuil-nav {
    background-color: black;
    color: #fff;
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9; */
  }

  /* .tab-control {
    position: sticky;
    top: 44px;
    z-index: 2;
  } */

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  /* .content {
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  } */

  .tab-control {
    position: relative;
    z-index: 2
  }
</style>