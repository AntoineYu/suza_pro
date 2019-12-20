<template>
  <div>
      <detail-nav-bar></detail-nav-bar>
  </div>
</template>
<script>
import DetailNavBar from './childComps/DetailNavBar'
export default {
    name: 'Detail',
    components: {
        DetailNavBar
    },
    data() {
        return {
        
        }
    },
    // created() {
    //     console.log(this.$route.params.id);
    //     this.id = this.$route.params.id
    // }
}
</script>
<style scoped>
    
</style>