import { build, emptyDir } from "https://deno.land/x/dnt@0.38.1/mod.ts";
// @deno-types="https://deno.land/x/esbuild@v0.19.4/mod.d.ts"
import * as esbuild from "https://deno.land/x/esbuild@v0.19.4/mod.js";

console.debug("Start dnt ...");

const outDir = "./npm";
await emptyDir(outDir);
await build({
  entryPoints: ["./src/main.ts", "./src/post.ts"],
  outDir,
  typeCheck: false,
  test: false,
  declaration: false,
  esModule: false,
  shims: {
    deno: true,
  },
  package: {
    // Dummy package.json
    name: "The name of your action here",
    version: "0.1.0",
    description: "Provide a description here",
  },
});

console.log("Start esbuild ...");
const distDir = "./dist";
await emptyDir(distDir);

await esbuild.build({
  entryPoints: ["./npm/src/main.ts", "./npm/src/post.ts"],
  outdir: distDir,
  bundle: true,
  platform: "node",
  target: "node20",
  format: "cjs",
  minify: false,
  sourcemap: false,
}).finally(() => {
  esbuild.stop();
});

console.log("Complete!");
