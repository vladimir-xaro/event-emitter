import typescript from '@rollup/plugin-typescript';
// import preprocess from "svelte-preprocess";
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
// import commonjs from '@rollup/plugin-commonjs';
import cleanup from 'rollup-plugin-cleanup';

export default CLIArgs => {
  const mode = process.env.BUILD || 'development';
  const isDev = mode === 'development';

  return {
    input: 'src/index' + (isDev ? '.dev' : '') + '.ts',
    output: [{
      sourcemap: true,
      format: 'iife',
      name: 'EventEmitter',
      file: (isDev ? 'dev' : 'dist') + '/event-emitter.js',
    }, {
      sourcemap: true,
      format: 'iife',
      name: 'EventEmitter',
      file: (isDev ? 'dev' : 'dist') + '/event-emitter.min.js',
      plugins: [
        !isDev && terser(),
      ]
    }],
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