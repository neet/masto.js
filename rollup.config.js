import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import autoExternal from 'rollup-plugin-auto-external';
import dts from 'rollup-plugin-dts';
import typescript from 'rollup-plugin-typescript2';

import packageJSON from './package.json';

export default [
  {
    input: './src/entrypoints/nodejs.ts',
    output: {
      file: packageJSON.main,
      format: 'cjs',
    },
    plugins: [json(), typescript(), autoExternal()],
  },
  {
    input: './src/entrypoints/nodejs.ts',
    output: {
      file: packageJSON.module,
      format: 'esm',
    },
    plugins: [commonjs(), json(), typescript(), autoExternal()],
  },
  {
    input: './src/entrypoints/fetch.ts',
    output: {
      file: './dist/fetch.js',
      format: 'cjs',
    },
    plugins: [json(), typescript(), autoExternal()],
  },
  {
    input: './src/entrypoints/fetch.ts',
    output: {
      file: './dist/fetch.mjs',
      format: 'esm',
    },
    plugins: [commonjs(), json(), typescript(), autoExternal()],
  },
  {
    input: './src/entrypoints/nodejs.ts',
    output: {
      file: packageJSON.types,
      format: 'esm',
    },
    plugins: [dts()],
  },
];
