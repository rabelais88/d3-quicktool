import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'cjs',
    },
    {
      file: 'dist/bundle.min.js',
      format: 'umd',
      name: 'd3-quicktool',
      plugins: [terser()],
    },
  ],
  plugins: [babel()],
};
