import { AxiosResponse } from 'axios'
import { route } from '../../../../Route'
import { api, axiosRequestConfiguration } from './../../../../api.axios'
const axiosInstance = api(axiosRequestConfiguration)

export const listShedule = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get(`${route}/shedule`)
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
