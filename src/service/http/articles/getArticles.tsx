import { AxiosResponse } from 'axios'
import { api, axiosRequestConfiguration } from './../../../../api.axios'
const axiosInstance = api(axiosRequestConfiguration)

export const getArticles = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get(`https://api.jsonbin.io/v3/b/63f16905ebd26539d080f269`)
            .then((value: AxiosResponse) => {
                resolve(value.data.record.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
