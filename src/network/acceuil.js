import {request} from './index'

export function getData() {
    return request({
        url: '/getData'
    })
}

export function getGoodsData(type, page) {
    return request({
        url: '/getGoods',
        params: {
            type,
            page
        }
    })
}

