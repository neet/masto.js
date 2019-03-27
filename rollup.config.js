import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import builtins from 'rollup-plugin-node-builtins';
import autoExternal from 'rollup-plugin-auto-external';

const tsconfigOverride = {
  compilerOptions: {
    module: 'es6',
  },
};

export default [
  // Node.js
  {
    input: './src/index.ts',
    output: {
      name: 'masto',
      file: './dist/index.js',
      format: 'cjs',
      exports: 'named',
    },
    plugins: [
      resolve({
        preferBuiltins: true,
      }),
      commonjs(),
      json(),
      typescript({
        tsconfigOverride,
      }),
      terser(),
      autoExternal(),
    ],
  },

  // Browser
  {
    input: './src/index.ts',
    output: {
      name: 'masto',
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
      typescript({
        tsconfigOverride,
      }),
      terser(),
    ],
  },
];
