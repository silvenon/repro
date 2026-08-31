import { test, expect } from "vitest";
import { page } from "vitest/browser";

test("this test does not support test names of 158 characters because the trace file name generated from such a name is far too long for the file system to store it", async () => {
  await page.render(<h1>Hello World</h1>);
  await expect
    .element(page.getByRole("heading", { name: "Hello World" }))
    .toBeVisible();
});
