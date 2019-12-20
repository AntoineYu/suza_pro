<template>
  <div>
      <swiper class="detail-swiper" :options="swiperOption">
        <swiper-slide v-for="item in topImages">
            <img :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'DetailSwiper',
    components: {
        swiper,
        swiperSlide
    },
    props: {
        topImages: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            swiperOption: {
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: true,
                    stopOnLastSlide: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                },
            }
        }
    }
}
</script>
<style scoped>
    .detail-swiper {
        height: 300px;
    }

    .detail-swiper img {
        width: 100%;
    }
</style>