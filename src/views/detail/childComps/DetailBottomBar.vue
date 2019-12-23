<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service" />
        <span class="text">Service</span>
      </div>
      <div>
        <i class="icon shop" />
        <span class="text">Panier</span>
      </div>
      <div>
        <i class="icon select" />
        <span class="text">Collection</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">Ajouter au panier</div>
      <div class="buy">Acheter</div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'DetailBottomBar',
    methods: {
        addToCart() {
            this.$emit('addCart')
        }
    }
}
</script>
<style scoped>
    .bottom-bar {
        height: 49px;
        background-color: #fff;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        text-align: center;
        z-index: 10;
    }

    .bar-item {
        height: 49px;
        flex: 1;
        display: flex;
    }

    .bar-item > div {
        flex: 1;
    }

    .bar-left .text {
        font-size: 13px;
    }

    .bar-left .icon {
        display: block;
        width: 22px;
        height: 22px;
        margin: 7px auto 0;
        background: url("~assets/images/detail/detail_bottom.png") 0 0/100%;
    }

    .bar-left .service {
        background-position: 0 -54px;
    }

    .bar-left .shop {
        background-position: 0 -98px;
    }

    .bar-right {
        height: 49px;
        font-size: 15px;
        color: #fff;
        line-height: 49px;
    }

    .bar-right .cart {
        background-color: #ffe817;
        color: #333333;
        font-size: 11px;
    }

    .bar-right .buy {
        background-color: #ff6699;
        font-size: 11px;
    }
</style>