const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const autoExternal = require('rollup-plugin-auto-external');
const { default: dts } = require('rollup-plugin-dts');
const typescript = require('rollup-plugin-typescript2');

const packageJSON = require('./package.json');

module.exports = [
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
