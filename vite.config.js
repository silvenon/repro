import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      name: "repro:enforce-pre",
      enforce: "pre",
      resolveId(source) {
        console.log({ source });
      },
    },
    {
      name: "repro:order-pre",
      resolveId: {
        order: "pre",
        handler(source) {
          console.log({ source });
        },
      },
    },
  ],
  build: {
    rolldownOptions: {
      input: "./style.css",
    },
  },
});
