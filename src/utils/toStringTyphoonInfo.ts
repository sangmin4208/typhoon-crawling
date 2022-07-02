import { TyphoonInfo } from './../type/TyphoonInfo'

// Array => string
export const toStringTyphoonInfos = (infos: TyphoonInfo[]) => {
    const temp = [] as string[]
    infos.forEach((info) => {
        temp.push(toStringTyphoonInfo(info) + '\n')
    })
    return temp.join('')
}

// 날짜시간/위도/경도/중심기압/초속
export const toStringTyphoonInfo = (info: TyphoonInfo) => {
    const { date, latitude, longitude, atm, velocity } = info
    return `${date} ${latitude * 10} ${longitude * 10} ${atm} ${velocity}`
}
