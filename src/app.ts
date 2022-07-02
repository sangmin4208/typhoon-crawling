import { getHTML } from './modules/crawling/api/getHTML'
import { parseTable } from './modules/crawling/parse/parseTable'
import { wrtieTypoonInfos } from './modules/write/writeTyphoonInfo'
import { getFileNamePrefix } from './utils/getCurrentTime'

async function update() {
  const data = await getHTML()
  const typhoonInfos = parseTable(data)
  const prefix = getFileNamePrefix()
  wrtieTypoonInfos(`output/${prefix}.txt`, typhoonInfos)
}

function main() {
  const intervalTime = 1000 * 5
  setInterval(update, intervalTime)
}
main()
