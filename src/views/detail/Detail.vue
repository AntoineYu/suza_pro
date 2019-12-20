<template>
  <div class="detail">
      <detail-nav-bar></detail-nav-bar>
      <scroll class="content" ref="scroll">
          <detail-swiper :topImages="topImages"></detail-swiper>
      </scroll>
  </div>
</template>
<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import Scroll from 'components/common/scroll/Scroll'
import {getDetail} from 'network/detail'
export default {
    name: 'Detail',
    components: {
        DetailNavBar,
        DetailSwiper,
        Scroll
    },
    data() {
        return {
            id: null,
            topImages: []
        }
    },
    created() {
        this.id = this.$route.params.id
        getDetail(this.id).then(res => {
            this.topImages = res.list
            // console.log(res.list);
        })
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