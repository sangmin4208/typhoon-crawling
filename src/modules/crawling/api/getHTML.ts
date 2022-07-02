import { axiosInstance } from '../../../utils/axiosInstance'

const axios = axiosInstance

export const getHTML = async () => {
  const { data } = await axios.get('/')
  return data
}
