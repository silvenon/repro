import { test, expect } from "vitest";

test("NODE_ENV", () => {
  expect(process.env.NODE_ENV).toBe("test");
});
