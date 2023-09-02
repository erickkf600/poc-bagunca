import { AxiosResponse } from 'axios'
import { api, axiosRequestConfiguration } from './../../../../api.axios'
const axiosInstance = api(axiosRequestConfiguration)

export const getMyItems = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get(`https://api.jsonbin.io/v3/b/63f17e8bc0e7653a057a39bb`)
            .then((value: AxiosResponse) => {
                resolve(value.data.record.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
