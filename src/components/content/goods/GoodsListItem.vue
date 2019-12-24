<template>
  <div class="goods-list-item">
      <img v-lazy="goodsItem.img" alt="" @load="imageLoad" @click="itemClick">
      <div class="goods-info">
          <p>{{ goodsItem.Nom }}</p>
          <span class="price">{{ goodsItem.price }}</span>
      </div>
  </div>
</template>
<script>
export default {
    name: 'GoodsListItem',
    props: {
        goodsItem: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        imageLoad() {
            this.$bus.$emit('imageItemLoad')
        },
        itemClick() {
            this.$router.push('/detail/' + this.goodsItem._id["$oid"])
        }
    }
}
</script>
<style scoped>
    .goods-list-item {
        padding-bottom: 40px;
        position: relative;
        width: 48%;
    }

    .goods-list-item img {
        width: 100%;
        border-radius: 5px;
        border:3px solid var(--color-tint);
    }

    .goods-info {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }

    .goods-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }

    .goods-info .price {
        color: var(--color-high-text);
        margin-right: 20px;
    }
</style>