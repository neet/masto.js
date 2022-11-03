import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import autoExternal from 'rollup-plugin-auto-external';
import dts from 'rollup-plugin-dts';
import typescript from 'rollup-plugin-typescript2';

import packageJSON from './package.json' assert { type: 'json' };

export default [
  {
    input: './src/entrypoints/nodejs.ts',
    output: {
      file: packageJSON.exports['.'].require,
      format: 'cjs',
    },
    plugins: [json(), typescript(), autoExternal()],
  },
  {
    input: './src/entrypoints/nodejs.ts',
    output: {
      file: packageJSON.exports['.'].import,
      format: 'esm',
    },
    plugins: [commonjs(), json(), typescript(), autoExternal()],
  },
  {
    input: './src/entrypoints/fetch.ts',
    output: {
      file: packageJSON.exports['./fetch'].require,
      format: 'cjs',
    },
    plugins: [json(), typescript(), autoExternal()],
  },
  {
    input: './src/entrypoints/fetch.ts',
    output: {
      file: packageJSON.exports['./fetch'].import,
      format: 'esm',
    },
    plugins: [commonjs(), json(), typescript(), autoExternal()],
  },
  {
    input: './src/entrypoints/nodejs.ts',
    output: {
      file: packageJSON.exports['.'].types,
      format: 'esm',
    },
    plugins: [dts()],
  },
];
