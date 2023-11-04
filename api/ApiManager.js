import axios from "axios";

const ApiManager = axios.create({
    baseURL: 'https://restaurant-api.dicoding.dev',
    responseType: 'json',
    withCredentials: true,
    delayed: true
})

ApiManager.interceptors.request.use((config) => {
    if (config.delayed) {
        return new Promise(
            resolve => setTimeout(
                () => resolve(config), 100
            )
        )
    }

    return config
})

export default ApiManager