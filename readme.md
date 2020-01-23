# eslint-plugin-fp

This demo reproduces a bug with eslint-plugin-fp when running ESLint in Jest via [ESLint Node.js API](https://eslint.org/docs/developer-guide/nodejs-api). The ESLint configuration contains a couple of other rules to prove that this bug is specific to eslint-plugin-fp.

```sh
yarn install
# run ESLint via CLI to prove that it works
yarn lint
# run ESLint via Node.js API to prove that it works
yarn script
# run test which runs ESLint via Node.js API, this fails
yarn test
```
