import typescript from '@rollup/plugin-typescript';
// import preprocess from "svelte-preprocess";
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
// import commonjs from '@rollup/plugin-commonjs';
import cleanup from 'rollup-plugin-cleanup';

export default CLIArgs => {
  const mode = process.env.BUILD || 'development';
  const isDev = mode === 'development';

  const name = 'EventEmitter';
  const filename = 'event-emitter';

  const baseOutput = {
    sourcemap: true,
    name,
  };
  let output = [];

  if (isDev) {
    output.push(Object.assign({}, baseOutput, {
      format: 'iife',
      file: `dev/${filename}.js`
    }));
  } else {
    output.push(
      Object.assign({}, baseOutput, {
        format: 'iife',
        file: `dist/${filename}.js`
      }),
      Object.assign({}, baseOutput, {
        format: 'iife',
        file: `dist/${filename}.min.js`,
        plugins: [
          terser(),
        ]
      }),
      Object.assign({}, baseOutput, {
        format: 'es',
        file: `dist/${filename}.es.js`
      }),
      Object.assign({}, baseOutput, {
        format: 'es',
        file: `dist/${filename}.es.min.js`,
        plugins: [
          terser(),
        ]
      }),
    );
  }

  return {
    input: 'src/index' + (isDev ? '.dev' : '') + '.ts',
    output,
    plugins: [
      resolve({
        browser: true,
      }),
      typescript({
        target: 'es5'
      }),
      // commonjs(),

      !isDev && cleanup({
        comments: 'none'
      }),
    ],
  }
};