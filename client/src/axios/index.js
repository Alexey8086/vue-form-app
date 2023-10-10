import axios from 'axios'
import router from '@/router'
const BASE_URL = 'http://localhost:5000/api/'

const $host = axios.create({
    baseURL: BASE_URL
})

const authInterceptor = (req) => {
    req.headers.authorization = `Bearer 12345`
    req.headers.contentType = 'application/json'

    return req
}


$host.interceptors.request.use(authInterceptor, (e) => {

    return e
})


export {
    $host,
}