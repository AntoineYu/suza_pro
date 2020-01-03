import {
  ADD_COUNTER,
  ADD_TO_CART,
  DELETE_FROM_CART,
  SUB_COUNTER
} from './mutations-type'

export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
          let oldProduct = context.state.cartList.find(item => item.id === payload.id)
          if(oldProduct) {
            context.commit(ADD_COUNTER, oldProduct)
            resolve('Nombre de ce produit +1')
          }else {
            payload.count = 1
            context.commit(ADD_TO_CART, payload)
            resolve('Ajouté dans la panier')
          }
        })
    },
    removeCart(context, payload) {
      for(var i=0; i<payload.length; i++) {
        context.commit(DELETE_FROM_CART, payload[i])
      }
    }
}