<template>
  <div class="panier">
    <nav-bar class="nav-bar">
      <div slot="center">Panier({{ length }})</div>
    </nav-bar>
    <panier-list></panier-list>
    <panier-bottom-bar></panier-bottom-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

import PanierList from './childComps/PanierList'
import PanierBottomBar from './childComps/PanierBottomBar'

import {mapGetters} from 'vuex'

export default {
    name: 'Panier',
    components: {
      NavBar,
      PanierList,
      PanierBottomBar
    },
    computed: {
      // ...mapGetters(['cartLength', 'cartList'])
      ...mapGetters({
        length: 'cartLength'
      })
    }
}
</script>
<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>