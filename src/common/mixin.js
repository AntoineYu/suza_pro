import {debounce} from './utils'
import BackTop from 'components/content/backtop/BackTop'

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

export const backtopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    listenShowBackTop(position) {
      this.isShowBackTop = (-position.y) > 500
    }
  }
}