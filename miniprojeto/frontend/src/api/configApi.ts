import axios, { AxiosError } from "axios";
import type { InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { authStorage } from '../utils/token/authStorage';


const api = axios.create({
    baseURL: "http://localhost:3001/",
    timeout: 10000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config: InternalAxiosRequestConfig)=>{
    const token = authStorage.getToken()

    if(token && config.headers){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error);
});

api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError<{ message: string }>) => { 
        
        const mensagemAmigavel = error.response?.data?.message || "Erro inesperado no servidor";

        if (error?.response?.status === 401) {
            authStorage.removeToken();
            if (window.location.pathname !== '/home') {
                window.location.href = '/home';
            }
        }

        return Promise.reject(new Error(mensagemAmigavel));
    }
);

export default api;