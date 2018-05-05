import assert from 'power-assert'
import favicons from './index.js'
import { join, resolve, parse, dirname, sep } from 'path'
import fs from 'fs'
import { promisify } from 'util'

const readFile = promisify(fs.readFile)

const name = 'favicons'
const filepath = resolve(join('.example', 'put', `${name}.png`))
const out = parse(resolve(join('.example', 'out', `${name}.png`)))

const test = (opts) => () => {

  const { processor, after } = favicons(opts)

  return readFile(filepath)
  .then(buffer => processor(buffer, { out }))
  .then(result => {
    assert.ok(Array.isArray(result))
    assert.ok(Array.isArray(after()))

    const nameAsDir = Boolean((opts || {}).nameAsDir)
    
    result.forEach(([outpath]) => {
      const dirSplits = dirname(outpath).split(sep)
      const isNameAsDir = dirSplits[dirSplits.length - 1] === name
      assert.equal(nameAsDir, isNameAsDir)
    })
  })
}

it('favicons()', test())
it('favicons({ nameAsDir: false })', test({ nameAsDir: false }))
it('favicons({ nameAsDir: true })', test({ nameAsDir: true }))