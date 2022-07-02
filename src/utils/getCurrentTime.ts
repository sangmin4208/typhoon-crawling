import { getUnixTime } from 'date-fns'

export const getFileNamePrefix = () => {
  return getUnixTime(new Date())
}
