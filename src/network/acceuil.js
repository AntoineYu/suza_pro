import {request} from './request'

export function getData() {
    return request({
        url: '/getData'
    })
}

export function getGoods() {
    return request({
        url: '/getGoods'
    })
}

