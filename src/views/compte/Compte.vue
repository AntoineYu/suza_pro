<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="center">Votre compte</div>
    </nav-bar>
    <!-- <scroll class="content">
      
    </scroll> -->
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"
import Scroll from "@/components/common/scroll/Scroll"
export default {
    name: 'Compte',
    components: {
      NavBar,
      Scroll
    }
}
</script>
<style scoped>
  .profile {
    width: 100%;
  }

  .nav-bar {
    font-weight: 600;
    color: white;
    background-color: var(--color-tint)
  }
</style>