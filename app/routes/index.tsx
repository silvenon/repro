import { useLoaderData, json, useCatch } from 'remix'
import type { LoaderFunction } from 'remix'
import esbuild from '../esbuild.server'

interface LoaderData {
  code: string
}

export const loader: LoaderFunction = async () => {
  try {
    const result = await esbuild.transform(`{ "title": "Hello world!" }`, { loader: 'json' })
    return result
  } catch (err) {
    throw new Response(err instanceof Error ? err.message : 'Error while compiling with esbuild', { status: 500 })
  }
}

export default function Index() {
  const result = useLoaderData<LoaderData>()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <p>Code compiled by esbuild:</p>
      <pre>
        {result?.code ?? '...'}
      </pre>
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

export function CatchBoundary() {
  const response = useCatch()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Error</h1>
      <p>{response.statusText}</p>
      <pre>
        {response?.data ?? '...'}
      </pre>
    </div>
  )
}

export function ErrorBoundary({error}: {error: Error}) {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Error</h1>
      <pre>
        {error.message}
      </pre>
    </div>
  );
}