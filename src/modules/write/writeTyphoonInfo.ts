import { toStringTyphoonInfos } from './../../utils/toStringTyphoonInfo'
import { TyphoonInfo } from './../../type/TyphoonInfo'
import { writeFile } from 'fs/promises'

export const wrtieTypoonInfos = (path: string, infos: TyphoonInfo[]) => {
  const data = toStringTyphoonInfos(infos)
  return writeFile(path, data)
}
