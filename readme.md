# Vite RSC plugin + `html-react-parser`

This is a quick repro created from the official "starter" example that shows how the Vite RSC plugin's behavior to to include all dependencies that have `react` among their `peerDependencies` into Vite's `environments.ssr.resolve.noExternal` array. It's not `html-react-parser` directly that breaks, it's its dependency `html-dom-parser`.

```sh
corepack install
pnpm install
pnpm run dev --open
```

`.default` export from `html-dom-parser` not found, case-closed, right? However, the build runs fine:

```sh
pnpm run build
pnpm run preview --open
```
