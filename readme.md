# Issue with reloading styles using `@tailwindcss/typography`

This demonstrates a subtle issue when working with [`@tailwindcss/typography`](https://www.npmjs.com/package/@tailwindcss/typography), but I don't know if it's related.

To get started, install dependencies and run the development server:

```sh
npm install
npm run dev
```

Changing `tailwind.config.js` will cause styles to recompile, e.g. change the value of `theme.typography.default.css.a.color` to see how the link color automatically updates. **However**, if you remove the `color` property altogether, nothing happens. If you stop the server and run it again, you will see the color that should have been applied.
