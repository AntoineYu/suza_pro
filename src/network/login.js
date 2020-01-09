import {request} from './index'

export function sendCode(email) {
    return request({
        url: '/sendCode',
        params: {
            email
        }
    })
}

export function check_register(data) {
    return request({
        url: "/register",
        method: "post",
        data
    })
}

export function check_login(data) {
    return request({
        url: "/login",
        method: "post",
        data
    })
}