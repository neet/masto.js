import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import builtins from 'rollup-plugin-node-builtins';
import { terser } from 'rollup-plugin-terser';
import packageJSON from './package.json';

// import autoExternal from 'rollup-plugin-auto-external';

export default [
  {
    input: './src/index.ts',
    output: {
      file: packageJSON.main,
      format: 'cjs',
    },
    plugins: [commonjs(), json(), typescript()],
  },
  {
    input: './src/index.ts',
    output: {
      file: packageJSON.module,
      format: 'esm',
    },
    plugins: [commonjs(), json(), typescript()],
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
