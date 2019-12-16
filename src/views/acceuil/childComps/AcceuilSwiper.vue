<template>
  <div>
    <swiper>
        <swiper-item v-for="item in banners">
            <a :href="item.url">
                <img :src="item.img" alt="">
            </a>
        </swiper-item>
    </swiper>
  </div>
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
    name: 'AcceuilSwiper',
    components: {
        Swiper,
        SwiperItem
    },
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>
<style scoped>

</style>