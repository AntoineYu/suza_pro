import axios from 'axios'

// axios.defaults.withCredentials = true
axios.defaults.baseURL = '/suza'

export function request(config) {
    const instance = new axios.create({
        // baseURL: 'http://49.235.69.94:81',
        timeout: 100000
    });

    instance.interceptors.request.use(config => {

        return config;
      }, err => {
      })
    
      instance.interceptors.response.use(res => {
        return res.data
      }, err => {
      })

      return instance(config)
}