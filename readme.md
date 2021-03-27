# Gulp + Tailwind JIT

```sh
npm run dev # serve + watch files
npm run build # build for production
```

This setup takes the following instructions from Tailwind JIT into account:

> Make sure you set NODE_ENV=development if you are running a watcher, or Tailwind won't watch your template files for changes. Set NODE_ENV=production for one-off builds.
>
> If you want to control whether Tailwind watches files or not more explicitly, set TAILWIND_MODE=watch or TAILWIND_MODE=build to override the default NODE_ENV-based behavior.
>
> For example if you want to do one-off builds with NODE_ENV=development, explicitly set TAILWIND_MODE=build so that Tailwind knows you are just doing a one-off build and doesn't hang.
