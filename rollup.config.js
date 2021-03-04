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

  let result = [];

  if (isDev) {
    result.push({
      input: 'src/index.dev.ts',
      output: {
        sourcemap: true,
        name,
        format: 'iife',
        file: `dev/${filename}.js`,
        plugins: [
          resolve({
            browser: true,
          }),
          typescript({
            target: 'es5'
          }),
        ]
      },
      plugins: [],
    })
  } else {
    const base = {
      input: 'src/index.ts',
      output: [],
      plugins: [
        cleanup({
          comments: 'none'
        }),
      ],
    };
    const baseOutput = {
      sourcemap: true,
      name,
    }

    result.push(
      Object.assign({}, base, {
        plugins: [
          resolve({
            browser: true,
          }),
          typescript({
            target: 'es5'
          }),
        ]
      }),
      Object.assign({}, base, {
        plugins: [
          typescript({
            target: 'esnext'
          }),
        ]
      }),
    );

    // es5
    result[0].output.push(
      Object.assign({}, baseOutput, {
        format: 'iife',
        file: `dist/${filename}.js`
      }),
      Object.assign({}, baseOutput, {
        format: 'iife',
        file: `dist/${filename}.js`,
        plugins: [
          terser(),
        ]
      }),
    );

    // es
    result[0].output.push(
      Object.assign({}, baseOutput, {
        format: 'es',
        file: `dist/${filename}.es.js`,
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

  return result;
}