import {defineConfig} from "vite";

export default defineConfig({
    environments: {
        ssr: {
            include: ["randomdbname"],
            build: {
                target: "node20",
                rollupOptions: {
                    input: "./repro.js",
                },
            },
        },
    },
    builder: {
        async buildApp(builder) {
            await builder.build(builder.environments.ssr);
        },
    },
});
