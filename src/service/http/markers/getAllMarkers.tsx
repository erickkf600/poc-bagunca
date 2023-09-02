import { AxiosResponse } from 'axios'
import { api, axiosRequestConfiguration } from './../../../../api.axios'
const axiosInstance = api(axiosRequestConfiguration)

export const getMapMarkers = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get(`https://api.jsonbin.io/v3/b/63f391fbace6f33a22e219f9`)
            .then((value: AxiosResponse) => {
                resolve(value.data.record.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
