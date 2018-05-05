import { join } from 'path'
import favicons from '..'
import { outputFile } from 'fs-extra'
import generateHtml from './generateHtml.js'

const put = join(__dirname, 'put')
const out = join(__dirname, 'out')

const nameAsDir = true
const config = { path: nameAsDir ? './favicons' : './' }
const ext = favicons({ nameAsDir, config })

export default {
  put,
  out,
  clean: true,
  processors: { png: ext },
  after: () => {
    const outpath = join(out, 'index.html')
    const htmlTags = ext.after()
    const IndexHtml = generateHtml(htmlTags)
    return outputFile(outpath, IndexHtml)
  }
}