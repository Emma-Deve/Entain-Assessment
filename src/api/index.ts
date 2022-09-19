import Axios, { ResponseData } from './request'
import { AxiosPromise } from 'axios'
import { NEXT_RACES } from './path'

export const reqRaceData = (): AxiosPromise<ResponseData> =>
  Axios.request({
    url: NEXT_RACES,
    method: 'GET',
  })
