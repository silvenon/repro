# Vitest extension `NODE_ENV` bug

Reproduces vitest-dev/vscode#305.

Install dependencies:

```sh
npm install
```

Running tests via CLI should work fine:

```sh
npm test
```

But running tests via [VS Code extension](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) fails. Make sure to install the pre-release version.
