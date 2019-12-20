import {request} from './index'

export function getDetail(id) {
    return request({
        url: "/getDetail",
        params: {
            id
        }
    })
}

export class Goods {
    constructor() {
        
    }
}