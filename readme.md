# Repro: Vitest v5.0.0-beta.7, projects and setup

I had been using Node v24 for this. What I've found out:

- it only happens with `projects`, not if I collapse everything into top-level `test`
- it only happens if `setup.ts` contains content, seemingly if it contains an import that augments vitest

```sh
pnpm install # install deps
pnpm test:setup # install browsers
pnpm test # run tests
```
