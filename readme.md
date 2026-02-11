# Vite CSS `url()` + plugin `resolveId()` hook

In Vite assets that loaded via `url()` doesn't appear to go through plugin `resolveId` hook. This is a problem for vitejs/vite#21476.

```sh
corepack install
pnpm install
pnpm build
```
