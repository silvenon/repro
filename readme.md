# Vitest configuration in `rolldown-vite` with pnpm

Unlike with `vite`, Vitest struggles to augment `rolldown-vite` configuration with `test` if pnpm is used. It seems to work fine with npm.

```
corepack install
pnpm install
pnpm run typecheck
```
