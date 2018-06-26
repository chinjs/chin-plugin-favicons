import favicons from '..'
import { join } from 'path'
import { outputFile } from 'fs-extra'
import generateHtml from './generateHtml.js'

const put = join(__dirname, 'put')
const out = join(__dirname, 'out')

const nameAsDir = true
const config = { path: nameAsDir ? './favicons' : './' }
const svg2fav = favicons({ nameAsDir, config })

export default {
  put,
  out,
  clean: true,
  processors: { svg: svg2fav },
  after: () => {
    const outpath = join(out, 'index.html')
    const htmlTags = svg2fav.after()
    const IndexHtml = generateHtml(htmlTags)
    return outputFile(outpath, IndexHtml)
  }
}