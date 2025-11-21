import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: false,
  format: ["esm"],
  dts: true,
  external: ["react", "react-dom"],
});
