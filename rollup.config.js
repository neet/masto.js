import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import builtins from 'rollup-plugin-node-builtins';
import autoExternal from 'rollup-plugin-auto-external';
import packageJSON from './package.json';

const filenameMap = {
  cjs: packageJSON.main,    // Node.js
  umd: packageJSON.browser, // Browsers
  esm: packageJSON.module,  // Universal (but not well-supported)
};

export default ['cjs', 'umd', 'esm'].map(format => ({
  input: './src/index.ts',
  output: {
    name: packageJSON.name,
    file: filenameMap[format],
    format,
    exports: 'named',
  },
  plugins: [
    resolve({
      preferBuiltins: true,
      browser: format === 'umd',
    }),
    format === 'umd' ? builtins() : null,
    commonjs(),
    json(),
    typescript(),
    terser(),
    autoExternal({
      builtins: format !== 'umd',
      dependencies: format !== 'umd',
    }),
  ],
}));
