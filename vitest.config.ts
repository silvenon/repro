import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-oxc";

export default defineConfig({
  plugins: [react()],
});
