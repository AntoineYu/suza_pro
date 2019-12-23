<template>
  <div class="panier-list">
      <scroll class="content" ref="scroll">
          <panier-list-item v-for="(item, index) in cartList" 
          :key="index"
          :product="item"></panier-list-item>
      </scroll>
  </div>
</template>
<script>
import Scroll from 'components/common/scroll/Scroll'

import PanierListItem from './PanierListItem'

import { mapGetters } from 'vuex'
export default {
    name: 'PanierList',
    components: {
        Scroll,
        PanierListItem
    },
    computed: {
        ...mapGetters(['cartList'])
    },
    actived() {
        this.$refs.scroll.refresh()
    }
}
</script>
<style scoped>
    .panier-list {
        height: 100vh;
    }

    .content {
        height: calc(100% - 44px - 49px - 40px);
    }
</style>