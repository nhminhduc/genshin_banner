/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react(), tsconfigPaths()],
    test: {
      environment: "happy-dom",
      coverage: {
        provider: "c8",
        reporter: ["text", "json", "html"],
      },
    },
    base: "/genshin_banner/",
    publicDir: env.VITE_USE_PUBLIC === "true" ? "public" : false,
  };
});
