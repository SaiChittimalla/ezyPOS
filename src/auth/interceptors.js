import axios from "axios";
import { loadValue } from "../components/loader/loader";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const axiosInstance = axios.create({
    timeout: 10000
})

axiosInstance.interceptors.request.use((config) => {

    loadValue.value = true
    config.withCredentials = true;
    return config
}, (error) => {
    loadValue.value = false
    return Promise.reject(error)
})
axiosInstance.interceptors.response.use((response) => {
    loadValue.value = false

    return response.data
}, (error) => {
    console.log(error.response.status);
    toast.error(error.message);
    loadValue.value = false
    return Promise.reject(error);
})

export default axiosInstance