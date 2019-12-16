<template>
  <div id="acceuil">
    <nav-bar class="acceuil-nav"><div slot="center">SUZA</div></nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    name: 'Acceuil',
    components: {
      NavBar
    }
}
</script>
<style scoped>
  #acceuil {
    padding-top: 44px;
    position: relative;
  }

  .acceuil-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
  }
</style>