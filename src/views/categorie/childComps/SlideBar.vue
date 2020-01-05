<template>
  <div class="slide-bar">
    <scroll class="slide-bar-height">
      <div>
        <sub-category :category-list="slideBarList" :len="slideBarList.length"></sub-category>
      </div>
    </scroll>
  </div>
</template>
<script>
import SubCategory from "./subcategory"

import Scroll from "@/components/common/scroll/Scroll"

export default {
    name: 'SlideBar',
    components: {
      SubCategory,
      Scroll
    },
    data() {
      return{
        
      }
    },
    props: {
      slideBarList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      // slideBarItemClick(index) {
      //   this.currentIndex = index
      // }
    }
}
</script>
<style scoped>
  .slide-bar {
    width: 100%
  }

  .slide-bar-height {
    width: 100px;
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    background-color: #f6f6f6;
    overflow: hidden;
  }

  .slide-bar-item {
    width: 100px;
    height: 90px;
    font-size: 14px;
    color: #666666;
    text-align: center;
    font-weight: 700;
    line-height: 30px;
    padding-top: 20px;
}
</style>