import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
// import deepmerge from 'deepmerge';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

// const arrayMerge = (destination, source) => [ ...destination, ...source ];

const isDev = process.env.NODE_ENV !== 'production'

const filename = 'event-emitter';
const name = 'EventEmitter';

const config = [];

if (isDev) {  // Dev
  config.push({
    input: 'src/index.dev.ts',
    output: {
      sourcemap: true,
      name,
      format: 'umd',
      file: `dev/${filename}.js`,
      plugins: [
        terser({
          format: {
            indent_level: 2,
            beautify: true,
            comments: false,
          }
        }),
      ]
    },
    plugins: [
      typescript({
        target: 'esnext',
      }),
    ]
  });
} else {  // Prod
  config.push({
    input: 'src/index.ts',
    output: [
      {
        sourcemap: true,
        name,
        format: 'es',
        file: `dist/${filename}.es.js`,
      }
    ],
    plugins: [
      typescript({
        target: 'esnext',
      }),
      terser({
        format: {
          beautify: true,
          comments: true,
        }
      }),
    ]
  }, {
    input: 'src/index.ts',
    output: [
      {
        sourcemap: true,
        name,
        format: 'iife',
        file: `dist/${filename}.js`,
      }, {
        sourcemap: true,
        name,
        format: 'umd',
        file: `dist/${filename}.umd.js`,
      }, {
        sourcemap: true,
        name,
        format: 'cjs',
        file: `dist/${filename}.cjs.js`,
      }
    ],
    plugins: [
      typescript({
        target: 'esnext',
      }),
      commonjs(),
      terser({
        format: {
          beautify: true,
          comments: true,
        }
      }),
      resolve({
        browser: true,
      }),
      babel({
        babelHelpers: 'bundled',
        presets: [
          [
            "@babel/preset-env",
            {
              // targets: {
              //   "chrome": ">76",
              // }
              targets: "defaults"
            }
          ]
        ],
      }),
    ]
  })
}

export default config;