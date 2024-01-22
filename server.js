import express from "express";
import morgan from "morgan";
import fs from "node:fs/promises";
import { createServer } from "vite";

const app = express();

const vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});

app.use(vite.middlewares);

app.use(morgan("tiny"));
app.use("*", async (req, res) => {
  try {
    const url = req.originalUrl;
    const templateHtml = await vite.transformIndexHtml(
      url,
      await fs.readFile("./index.html", "utf-8"),
    );
    const { render } = await vite.ssrLoadModule("/app/entry.server.tsx");
    const appHtml = await render(req);
    res
      .status(200)
      .setHeader("content-type", "text/html")
      .end(templateHtml.replace(`<!-- app-html -->`, appHtml));
  } catch (error) {
    vite?.ssrFixStacktrace(error);
    console.log(error.stack);
    res.status(500).end(error.stack);
  }
});

app.listen(3000, () => {
  console.log(`Server running on http://localhost:${3000}`);
});

export default app;
