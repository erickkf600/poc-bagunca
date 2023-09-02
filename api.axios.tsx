import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export const axiosRequestConfiguration: AxiosRequestConfig = {
    // baseURL: process.env.REACT_APP_API_URL,
    headers: {},
    timeout: 10000,
}

export const api = (config: AxiosRequestConfig): AxiosInstance => {
    const axiosInstance = axios.create(config)
    return axiosInstance
}
