<template>
  <div class="detail">
      <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
      <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
          <detail-swiper :top-images="topImages"></detail-swiper>
          <detail-params-info :item-params="itemParams" ref="params"></detail-params-info>
      </scroll>
      <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
      <back-top @click.native="backClick" v-show='isShowBackTop'></back-top>
  </div>
</template>
<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailParamsInfo from './childComps/DetailParamsInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'

import {getDetail} from 'network/detail'
import {backtopMixin} from 'common/mixin'
export default {
    name: 'Detail',
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailParamsInfo,
        DetailBottomBar,
        Scroll
    },
    data() {
        return {
            id: null,
            name: '',
            price: 0,
            themeTopYs: [],
            topImages: [],
            itemParams: [],
            currentIndex: 0
        }
    },
    mixins: [backtopMixin],
    created() {
        this.id = this.$route.params.id
        getDetail(this.id).then(res => {
            this.topImages = res.list
            this.img = res.img
            this.itemParams = res.params
            this.price = res.price
            this.name = res.Nom
            // console.log(res.list);
            this.$nextTick(() => {
                this.themeTopYs = []
                this.themeTopYs.push(0)
                this.themeTopYs.push(this.$refs.params.$el.offsetTop)
                // this.themeTopYs.push(Number.MAX_VALUE)
            })
        })
    },
    methods: {
        titleClick(index) {
            this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
        },
        contentScroll(position) {
            const positionY = -position.y
            let length = this.themeTopYs.length
            for(let i = 0; i < length; i++) {
                if((this.currentIndex !== i) && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) || 
                (i === length - 1 && positionY >= this.themeTopYs[i]))) {
                    this.currentIndex = i
                    this.$refs.nav.currentIndex = this.currentIndex
                }
            }
            this.listenShowBackTop(position)
        },
        addToCart() {
            const product = {}
            product.img = this.img
            product.id = this.id
            product.name = this.name
            product.price = this.price

            // this.$store.commit('addCart', product)
            this.$store.dispatch('addCart', product)
        }
    }
}
</script>
<style scoped>
    .detail {
        height: 100vh;
        position: relative;
        z-index: 1;
    }

    .content {
        height: calc(100% - 44px);
        background-color: #fff
    }
</style>