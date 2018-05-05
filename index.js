const favicons = require('favicons')
const { format, join } = require('path')

const fwa = (obj, ...assigned) => format(Object.assign({}, obj, ...assigned))

module.exports = ({ config, nameAsDir } = {}) => {

  const nad = Boolean(nameAsDir)

  let _html

  const after = () => _html

  const processor = (data, { out }) =>
    favicons(data, config)
    .then(({ images, files, html }) => {
      _html = html
      return [].concat(images, files)
    })
    .then(objects => objects.map(({ name, contents }) => [
      name.split('.'),
      contents
    ]))
    .then(entries => entries.map(([ [ name, ext ], contents ]) => [
      fwa(out, { name, ext: `.${ext}` }, nad && { dir: join(out.dir, out.name) }),
      contents
    ]))

  return { processor, after }
}