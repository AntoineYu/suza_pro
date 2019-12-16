import axios from 'axios'

export function request(config) {
    const instance = new axios.create({
        baseURL: 'http://49.235.69.94',
        timeout: 50000
    });

    instance.interceptors.request.use(config => {
        return config;
      }, err => {
      })
    
      instance.interceptors.response.use(res => {
        return res
      }, err => {
      })

      return instance(config)
}