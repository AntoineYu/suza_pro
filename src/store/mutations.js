import {
    ADD_COUNTER,
    ADD_TO_CART,
    DELETE_FROM_CART,
    SUB_COUNTER
} from './mutations-type'

export default {
    [ADD_COUNTER](state, payload) {
        payload.count ++
    },
    [ADD_TO_CART](state, payload) {
        payload.checked = true
        state.cartList.push(payload)
    },
    [DELETE_FROM_CART](state, payload) {
        state.cartList.forEach((value, index, array) => {
            if(payload.id === value.id) {
                array.splice(index, 1)
            }
        })
    },
    [SUB_COUNTER](state, payload) {
        if(payload.count > 0) {
            payload.count --
        }
    }
}