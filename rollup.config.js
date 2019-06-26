import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import builtins from 'rollup-plugin-node-builtins';
import autoExternal from 'rollup-plugin-auto-external';
import packageJSON from './package.json';

const formatMap = {
  main: 'cjs',
  browser: 'umd',
  module: 'esm',
};

export default ['main', 'browser', 'module'].map(dist => ({
  input: './src/index.ts',
  output: {
    name: packageJSON.name,
    file: packageJSON[dist],
    format: formatMap[dist],
    exports: 'named',
  },
  plugins: [
    resolve({
      preferBuiltins: true,
      browser: dist === 'browser',
    }),
    dist === 'browser' && builtins(),
    commonjs(),
    json(),
    typescript(),
    terser(),
    dist !== 'browser' && autoExternal(),
  ],
}));
