import { request } from "./index"

export function getCategory() {
    return request({
        url: "/getCategory"
    })
}

export function getProByCat(category, page) {
    return request({
        url: "/getProByCat",
        params: {
            category,
            page
        }
    })
}