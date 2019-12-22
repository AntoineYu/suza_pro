import {debounce} from './utils'

export const itemListenerMixin = {
    // components: {

    // },
    data() {
        return {
          newRfresh: null
        }
    },
    // methods: {

    // },
    mounted() {
        this.newRfresh = debounce(this.$refs.scroll.refresh, 300) 
        this.$bus.$on('imageItemLoad', () => {
          this.newRfresh()
      })
    }
}