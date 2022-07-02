import axios, { AxiosRequestConfig } from 'axios'
const baseURL = 'https://www.weather.go.kr/w/typhoon/report.do#'
const config: AxiosRequestConfig = { baseURL }
export const axiosInstance = axios.create(config)
