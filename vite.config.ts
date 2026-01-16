import { defineConfig } from "vite";
import rsc from "@vitejs/plugin-rsc";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [rsc(), react()],
  builder: {
    sharedConfigBuild: true,
  },
  environments: {
    client: {
      build: {
        rolldownOptions: {
          input: {
            index: "/src/framework/entry.browser.tsx",
          },
        },
      },
    },
    ssr: {
      build: {
        rolldownOptions: {
          input: {
            index: "/src/framework/entry.ssr.tsx",
          },
        },
      },
    },
    rsc: {
      build: {
        rolldownOptions: {
          input: {
            index: "/src/framework/entry.rsc.tsx",
          },
        },
      },
    },
  },
});
