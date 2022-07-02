import { TyphoonInfo } from './../../../type/TyphoonInfo'
import { Element, load } from 'cheerio'
export const parseTable = (data: string) => {
  const $ = load(data)
  const typhoonTable = $(
    'body > div.container > section > div > div.cont-wrap.cmp-typ-report > div:nth-child(2) > div.typhoon-report > div > div > div.over-scroll > table > tbody > tr'
  )
  const typhoonInfos: Array<TyphoonInfo> = []
  typhoonTable.each((i, el) => {
    typhoonInfos.push(parseRow(el))
  })
  return typhoonInfos
}

const parseRow = (row: Element): TyphoonInfo => {
  const $ = load(row)
  const date = $('tr>td:nth-child(1)').text()
  const latitude = Number($('tr>td:nth-child(2)').text())
  const longitude = Number($('tr>td:nth-child(3)').text())
  const atm = Number($('tr>td:nth-child(4)').text())
  const velocity = Number($('tr>td:nth-child(5)').text())

  return { date: foramtDate(date), latitude, longitude, atm, velocity }
}

const foramtDate = (date: string): string => {
  const now = new Date()
  const year = now.getFullYear()
  const tempMonth = now.getMonth() + 1
  const month = tempMonth < 10 ? '0' + tempMonth : '' + tempMonth
  const splitedDate = date.split('일')
  const dd = splitedDate[0]
  const hour = splitedDate[1].split('시')[0].trimStart()
  return `${year}${month}${dd}${hour}00`
}
