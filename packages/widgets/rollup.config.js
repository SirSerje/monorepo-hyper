import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import localResolve from 'rollup-plugin-local-resolve';
import sass from 'rollup-plugin-sass';
import pkg from './package.json';
import autoExternal from 'rollup-plugin-auto-external';

sass({
  processor: css => postcss([autoprefixer])
    .process(css)
    .then(result => result.css),
});

const config = {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      name: 'widgets',
    },
  ],
  external: [
    // 'react',
    // 'react-dom',
    // 'core',
  ],
  plugins: [
    autoExternal(),
    peerDepsExternal(),
    // postcss({ modules: true, extensions: ['.css', '.scss'] }),
    postcss({ extract: false, plugins: [autoprefixer], extensions: ['.css', '.scss'] }),
    babel({ exclude: 'node_modules/**' }),
    localResolve(),
    resolve(),
    commonjs(),
  ],
};

export default config;
