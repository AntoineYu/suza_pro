<template>
  <div class="shop-item">
      <div class="item-selector">
          <Check-button :is-checked="product.checked"
          @click.native="checkClick"></Check-button>
      </div>
      <div class="item-img">
          <img :src="product.img" alt="">
      </div>
      <div class="item-info">
          <div class="item-title">{{ product.name }}</div>
      </div>
      <div class="info-bottom">
          <div class="item-price left">${{ product.price.toFixed(2) }}</div>
          <div class="item-count right">x{{ product.count }}</div>
      </div>
  </div>
</template>
<script>
import CheckButton from 'components/content/checkbutton/CheckButton'

export default {
    name: 'PanierListItem',
    components: {
        CheckButton
    },
    props: {
        product: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        checkClick() {
            this.product.checked = !this.product.checked
        }
    }
}
</script>
<style scoped>
    .shop-item {
        width: 100%;
        display: flex;
        font-size: 0;
        padding: 5px;
        border-bottom: 1px solid #cccccc;
        position: relative;
    }

    .shop-item:last-child {
        border-bottom: 0;
    }

    .item-img {
        padding: 5px;
    }

    .item-img img {
        width: 80px;
        height: 100px;
        display: block;
        border-radius: 5px;
    }

    .item-title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .item-info {
        font-size: 17px;
        color: #333333;
        padding: 5px 10px;
        position: relative;
        overflow: hidden;
        width: 88%; 
        font-size: 14px;
        color: #666666;
        margin-top: 15px;
    }

    .info-bottom {
        margin-top: 10px;
        position: absolute;
        bottom: 20px;
        left: 120px;
        right: 30px;
    }

    .info-bottom .item-price {
        color: #ff4500;
        font-size: 20px
    }

    .info-bottom .item-count {
        color: black;
        font-size: 15px
    }

    .item-selector {
        width: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>