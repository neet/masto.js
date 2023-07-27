import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import autoExternal from "rollup-plugin-auto-external";
import dts from "rollup-plugin-dts";
import typescript from "rollup-plugin-typescript2";

import packageJSON from "./package.json" assert { type: "json" };

/** @type {import('rollup').RollupOptions[]} */
export default [
  {
    input: "./src/index.ts",
    output: {
      file: packageJSON.exports["."].require,
      format: "cjs",
    },
    plugins: [json(), typescript(), autoExternal()],
  },
  {
    input: "./src/index.ts",
    output: {
      file: packageJSON.exports["."].import,
      format: "esm",
    },
    plugins: [commonjs(), json(), typescript(), autoExternal()],
  },
  {
    input: "./src/index.ts",
    output: {
      file: packageJSON.exports["."].types,
      format: "esm",
    },
    plugins: [dts()],
  },
];
