import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import packageJSON from './package.json';

const external = [
  'asynckit',
  'axios',
  'change-case',
  'combined-stream',
  'eventemitter3',
  'fs',
  'http',
  'https',
  'isomorphic-ws',
  'mime-types',
  'normalize-url',
  'path',
  'querystring',
  'semver',
  'url',
  'util',
];

export default [
  {
    input: './src/index.ts',
    output: {
      file: packageJSON.main,
      format: 'cjs',
      exports: 'named',
    },
    plugins: [commonjs(), json(), typescript()],
    external,
  },
  {
    input: './src/index.ts',
    output: {
      file: packageJSON.module,
      format: 'esm',
      exports: 'named',
    },
    plugins: [commonjs(), json(), typescript()],
    external,
  },
  {
    input: './src/index.ts',
    output: {
      file: packageJSON.browser,
      format: 'umd',
      name: packageJSON.name,
      exports: 'named',
    },
    plugins: [
      resolve({ preferBuiltins: true }),
      builtins(),
      commonjs(),
      json(),
      typescript(),
      terser(),
    ],
  },
];
