# Adding a module declaration file

In `src/index.ts` I import `tailwindcss/colors`, but because `@types/tailwindcss` doesn't exist I want to create my own module declaration file.

As the TypeScript error suggests, one way to achieve the desired result is to create a declaration file, I learned that this file can be anywhere within `include` paths in `tsconfig.json`. In this case I could create a `src/tailwind.d.ts` that contains the following:

```ts
declare module 'tailwindcss/colors' {
  type Color = 'rose' | 'pink' | 'fuchsia' | 'purple' | 'violet' | 'indigo' | 'blue' | 'lightBlue' | 'cyan' | 'teal' | 'emerald' | 'green' | 'lime' | 'yellow' | 'amber' | 'orange' | 'red' | 'warmGray' | 'trueGray' | 'gray' | 'coolGray' | 'blueGray'
  type Shade = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

  const colors: Record<Color, Record<Shade, string>>

  export default colors
}
```

However, instead I would like to have a `typings` directory which works the same way as the default `node_modules/@types` does, so that I could eventually submit a PR to Definitely Typed if I wanted to. TypeScript documentation says that I can achieve this by using `typeRoots`:

```json
{
  "compilerOptions": {
    "typeRoots": ["node_modules/@types", "./typings"],
  }
}
```

Then I proceeded to create a file called `typings/tailwindcss/colors.d.ts`:

```ts
type Color = 'rose' | 'pink' | 'fuchsia' | 'purple' | 'violet' | 'indigo' | 'blue' | 'lightBlue' | 'cyan' | 'teal' | 'emerald' | 'green' | 'lime' | 'yellow' | 'amber' | 'orange' | 'red' | 'warmGray' | 'trueGray' | 'gray' | 'coolGray' | 'blueGray'
type Shade = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

declare const colors: Record<Color, Record<Shade, string>>

export default colors
```

I also created an empty `typings/tailwindcss/index.d.ts` just in case.

However, it didn't work. 😕 When I try to import `tailwindcss/colors` TypeScript still shows the same error as before.
