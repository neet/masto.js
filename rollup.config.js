import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import builtins from 'rollup-plugin-node-builtins';

export default [
  // Node.js
  {
    input: './src/index.ts',
    output: {
      name: '@laugnehq/core',
      file: './dist/index.js',
      format: 'umd',
      exports: 'named',
    },
    plugins: [
      resolve({
        preferBuiltins: true,
      }),
      commonjs(),
      json(),
      typescript(),
      terser(),
    ],
  },
  // Browser
  {
    input: './src/index.ts',
    output: {
      name: '@lagunehq/core',
      file: './dist/browser.js',
      format: 'umd',
      exports: 'named',
    },
    plugins: [
      resolve({
        browser: true,
        preferBuiltins: true,
      }),
      builtins(),
      commonjs(),
      json(),
      typescript(),
      terser(),
    ],
  },
];
