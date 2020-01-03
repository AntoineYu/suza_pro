<template>
  <div class="category">
    <nav-bar class="category-nav-bar">
      <div slot="center">Catégorie</div>
    </nav-bar>
    <slide-bar></slide-bar>
  </div>
</template>
<script>
import SlideBar from "./childComps/SlideBar"

import NavBar from "@/components/common/navbar/NavBar"

export default {
    name: 'Categorie',
    components: {
      SlideBar,
      NavBar
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