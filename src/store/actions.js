import {
  ADD_COUNTER,
  ADD_TO_CART
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
    }
}