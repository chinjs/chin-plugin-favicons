import React, { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import unified from 'unified'
import html2hast from 'rehype-parse'
import hast2react from 'rehype-react'
import hast2html from 'rehype-stringify'
import hastformat from 'rehype-format'

export default (htmlTags) =>
html2html
.processSync(
  '<!DOCTYPE html>' +
  renderToStaticMarkup(
    <IndexHtml
      elements={
        html2react
        .processSync(htmlTags.join(''))
        .contents
        .props
        .children
      }
    />
  )
)
.contents

const IndexHtml = ({ elements }) =>
<html>
  <head>
    {elements}
  </head>
  <body>
    <div />
  </body>
</html>

const html2react =
unified()
.use(html2hast, { fragment: true })
.use(hast2react, { createElement })

const html2html =
unified()
.use(html2hast)
.use(hastformat)
.use(hast2html)