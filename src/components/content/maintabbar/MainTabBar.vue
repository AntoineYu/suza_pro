<template>
  <tab-bar>
      <tab-bar-item path="/acceuil">
        <img slot="item-icon" src="~assets/images/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/home_active.svg" alt="">
        <div slot="item-text">Accueil</div>
      </tab-bar-item>
      <tab-bar-item path="/categorie">
        <img slot="item-icon" src="~assets/images/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/category_active.svg" alt="">
        <div slot="item-text">Categorie</div>
      </tab-bar-item>
      <tab-bar-item path="/panier">
        <img slot="item-icon" src="~assets/images/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">Panier</div>
      </tab-bar-item>
      <tab-bar-item path="/compte">
        <img slot="item-icon" src="~assets/images/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/profile_active.svg" alt="">
        <div slot="item-text">Compte</div>
      </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar' 
import TabBarItem from 'components/common/tabbar/TabBarItem' 
export default {
    name: 'MainTabBar',
    components: {
        TabBar,
        TabBarItem
    }
}
</script>
<style scoped>

</style>