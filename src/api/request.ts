import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosPromise,
  AxiosResponse,
} from 'axios'
import { BASE_URL } from './path'

export interface ResponseData {
  code: number
  data?: any
  msg: string
}

class HttpRequest {
  public request(options: AxiosRequestConfig): AxiosPromise {
    const instance: AxiosInstance = axios.create()
    const newOptions = this.mergeConfig(options)
    this.interceptors(instance, newOptions.url)
    return instance(newOptions)
  }

  private interceptors(instance: AxiosInstance, url?: string) {
    axios.defaults.headers.post['Content-Type'] = 'application/json'

    instance.interceptors.request.use(
      (config: AxiosRequestConfig) => config,
      (error) => Promise.reject(error),
    )
    instance.interceptors.response.use(
      (res: AxiosResponse) => {
        const { data } = res
        const { code, msg } = data
        if (code !== 200) {
          console.error(msg)
        }
        return res
      },
      (error) => Promise.reject(error),
    )
  }
  private mergeConfig(options: AxiosRequestConfig): AxiosRequestConfig {
    return { baseURL: BASE_URL, ...options }
  }
}

const Axios = new HttpRequest()
export default Axios
