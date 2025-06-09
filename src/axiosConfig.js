import axios from 'axios';
const instance = axios.create({baseURL: 'https://store-back-production-d6cb.up.railway.app/api'});

instance.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('token')
    if(token) config.headers.Authorization = `Bearer ${token}`
    return config
})
export default instance