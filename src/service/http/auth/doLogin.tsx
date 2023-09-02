import { AxiosResponse } from 'axios'
import { route } from '../../../../Route'
import { api, axiosRequestConfiguration } from './../../../../api.axios'
const axiosInstance = api(axiosRequestConfiguration)

export const doLogin = (body: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .post(`${route}/login`, body)
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
