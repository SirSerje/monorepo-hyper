import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import autoExternal from 'rollup-plugin-auto-external';

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      name: 'core',
      file: pkg.main,
      format: 'cjs',
    },
    external: [], // look at widgets/rollup.config.js as example
    plugins: [
      autoExternal(),
      resolve(),
      commonjs(),
    ],
  },
];
