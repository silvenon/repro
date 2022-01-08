import { useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'
import { bundleMDX } from '../mdx-bundler.server'

interface LoaderData {
  title: string
}

export const loader: LoaderFunction = async () => {
  const result = await bundleMDX({
    source: `
---
title: Hello world!
---
# Hello world!
    `.trim()
  })
  return result.frontmatter
}

export default function Index() {
  const meta = useLoaderData<LoaderData>()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <h2>Frontmatter title: {meta?.title ?? '...'}</h2>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
