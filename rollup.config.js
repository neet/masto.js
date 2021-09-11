import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import autoExternal from 'rollup-plugin-auto-external';
import typescript from 'rollup-plugin-typescript2';

import packageJSON from './package.json';

export default [
  {
    input: './src/index.ts',
    output: {
      file: packageJSON.main,
      format: 'cjs',
      exports: 'named',
    },
    plugins: [commonjs(), json(), typescript(), autoExternal()],
  },
  {
    input: './src/index.ts',
    output: {
      file: packageJSON.module,
      format: 'esm',
      exports: 'named',
    },
    plugins: [commonjs(), json(), typescript(), autoExternal()],
  },
];
