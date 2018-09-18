
import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';

export default {
  input: './src/index.js',
  output: {
    file: `./docs/hello-world-dev.js`,
    format: 'umd',
    // This is the name of the exported global object.
    // So the world function could be called with hello.world();
    name: pkg.name
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'  // only transpile our source code
    }),
    serve({
      open: true,
      contentBase: ['./docs', './']
    })
  ]
}
