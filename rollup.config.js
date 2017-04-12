import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import less from 'rollup-plugin-less';
import cjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'WeUI',
  plugins: [
    less({
      output: 'lib/react-weui.min.css'
    }),
    cjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/react.js': ['PropTypes', 'Component']
      }
    }),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [ [ 'es2015', { modules: false } ], 'stage-2', 'react' ],
      plugins: [ 'external-helpers' ]
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    resolve({
      jsnext: true,
      main: true
    }),
  ],
  external: ['react', 'react-dom'],
  dest: 'dist/react-weui.js'
};