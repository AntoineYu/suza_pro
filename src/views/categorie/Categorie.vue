<template>
  <div class="category">
    <nav-bar class="category-nav-bar">
      <div slot="center">Catégorie</div>
    </nav-bar>
    <slide-bar :slide-bar-list="categoryList"></slide-bar>
  </div>
</template>
<script>
import SlideBar from "./childComps/SlideBar"

import NavBar from "@/components/common/navbar/NavBar"

import {getCategory, getProByCat} from "@/network/categorie"

export default {
    name: 'Categorie',
    components: {
      SlideBar,
      NavBar
    },
    data() {
      return {
        categoryList: []
      }
    },
    methods: {
      getCategory() {
        getCategory().then(res => {
          this.categoryList = res
        })
      }
    },
    created() {
      this.getCategory()
    }
}
</script>
<style scoped>
  .category-nav-bar {
    font-weight: 600;
    color: white;
    background-color: var(--color-tint);
  }
</style>