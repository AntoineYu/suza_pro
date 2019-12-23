<template>
  <div class="bottom-bar">
      <div class="check-content">
          <check-button class="check-button" :is-checked="isSelectedAll" @click.native="checkClick"></check-button>
          <span>Tout</span>
      </div>
      <div class="price">
          Total: {{ totalPrice }}
      </div>
      <div class="calculate" @click="calcClick">
          Compter({{ checkLength }})
      </div>
  </div>
</template>
<script>
import CheckButton from 'components/content/checkbutton/CheckButton'

import {mapGetters} from 'vuex'

export default {
    name: 'PanierBottomBar',
    components: {
        CheckButton
    },
    computed: {
        ...mapGetters(['cartList']),
        totalPrice() {
            return '$' + this.cartList
            .filter(item => item.checked).reduce((preValue, item) => {
                return preValue + item.price * item.count
            }, 0).toFixed(2)
        },
        checkLength() {
            return this.cartList.filter(item => item.checked).length
        },
        isSelectedAll() {
            if (this.cartList.length ===0) return false  
            return !this.cartList.find(item => !item.checked) 
        }
    },
    methods: {
        checkClick() {
            if (this.isSelectedAll) {
                this.cartList.forEach(item => item.checked = false)
            }else {
                this.cartList.forEach(item => item.checked = true)
            }
        },
        calcClick() {
            if(!this.cartList.find(item => item.checked)) {
                this.$toast.show('Choisissez votre produit', 2000)
            }
        }
    }
}
</script>
<style scoped>
    .bottom-bar {
        height: 40px;
        background-color: #eee;
        position: absolute;
        bottom: 49px;
        left: 0;
        right: 0;
        display: flex;
        line-height: 40px;
        font-size: 14px;
    }

    .check-button {
        height: 20px;
        width: 20px;
        line-height: 20px;
        margin-right: 5px;
    }

    .check-content {
        display: flex;
        align-items: center;
        margin-left: 10px;
        width: 80px;
    }
    
    .price {
        margin-left: 20px;
        flex: 1
    }

    .calculate {
        width: 90px;
        background-color: red;
        color: #fff;
        text-align: center;
    }
</style>