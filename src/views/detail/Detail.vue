<template>
  <div>
      <p>{{id}}</p>
  </div>
</template>
<script>
export default {
    name: 'Detail',
    data() {
        return {
            id: null
        }
    },
    created() {
        console.log(this.$route.params.id);
        this.id = this.$route.params.id
    }
}
</script>
<style scoped>

</style>