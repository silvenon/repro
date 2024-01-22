# React Router data API hydration issue

```
npm run dev
```

This is a barebones example of server-side rendering a React Router app with a custom Express server using Vite, very similar to the official [data router server-side rendering example](https://github.com/remix-run/react-router/tree/fb0f1f94778f4762989930db209e6a111504aa63/examples/ssr-data-router) in React Router repo.

However, despite my routes being as simple as possible, I'm still getting hydration errors that I'm unable to figure out. In the official example I noticed that I'm also getting a hydration error as well as soon as I remove the `sleep` call from the route loader, which leads me to believe that there's something I don't understand about hydrating React Router apps.

Help? 🙏
