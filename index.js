import { unified } from 'unified'
import markdown from 'remark-parse'
import toRehype from 'remark-rehype'
import prettyCode from 'rehype-pretty-code'
import stringify from 'rehype-stringify'

const toHtml = unified()
  .use(markdown)
  .use(toRehype)
  .use(prettyCode)
  .use(stringify)
  .process

const result = await toHtml(`
~~~txt
first line
second line
third line
~~~
`)

console.log(String(result))