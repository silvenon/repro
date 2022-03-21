import { bundleMDX } from "mdx-bundler";
import rehypePrettyCode from "rehype-pretty-code";
import lightTheme from 'shiki/themes/min-light.json'
import darkTheme from 'shiki/themes/dracula-soft.json'

export async function compileMDX(source: string) {
  return bundleMDX({
    source,
    xdmOptions: (options) => {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        [rehypePrettyCode, {
          theme: {
            light: lightTheme,
            dark: darkTheme,
          },
        }],
      ]
      return options
    },
  })
}