<template>
  <div class="acceuil-swiper">
    <swiper :options="swiperOption">
        <!-- <swiper-slide v-for="item in banners">
            <a :href="item.url">
                <img :src="item.img" alt="">
            </a>
        </swiper-slide> -->
        <swiper-slide>
            <a href="">
                <img src="~assets/images/swiper/swiper1.png" alt="">
            </a>
        </swiper-slide>
        <swiper-slide>
            <a href="">
                <img src="~assets/images/swiper/swiper2.png" alt="">
            </a>
        </swiper-slide>
        <swiper-slide>
            <a href="">
                <img src="~assets/images/swiper/swiper3.png" alt="">
            </a>
        </swiper-slide>
        <swiper-slide>
            <a href="">
                <img src="~assets/images/swiper/swiper4.png" alt="" @load="imageLoad">
            </a>
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
    name: 'AcceuilSwiper',
    components: {
       swiper,
       swiperSlide
    },
    // props: {
    //     banners: {
    //         type: Array,
    //         default() {
    //             return []
    //         }
    //     }
    // },
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
    },
    methods: {
        imageLoad() {
            this.$emit('swiperImageLoad')
        }
    }
}
</script>
<style scoped>
    .acceuil-swiper img {
        width: 100%;
    }
</style>