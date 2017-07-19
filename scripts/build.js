/* eslint strict: [2, "global"] */

//webpack
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const webpackDocConfig = require('../webpack.config.doc');
//rollup with plugins
const rollup = require('rollup').rollup;
const babelRollup = require('rollup-plugin-babel');
const cjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify');
const replace = require('rollup-plugin-replace');
const resolveNode = require('rollup-plugin-node-resolve');
const less = require('rollup-plugin-less');
const progress = require('rollup-plugin-progress');
//file handling
const rimraf = require('rimraf');
const join = require('path').join;
const fs = require('fs');
const exec = require( 'child_process' ).exec;
//console utils
const argv = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');
const showWrite = argv.progress;
const showSection = argv.step || true;
const log = console.log;
const CLI = {
    section: msg => showSection ? log(chalk.white(chalk.underline.bgBlue(msg))) : false,
    write: (indicator, msg) => showWrite ? process.stdout.write(`(${chalk.red(indicator)})` + msg) : false
};
//variables
const Bundles = {
    UMD_DEV: 'UMD_DEV',
    UMD_PROD: 'UMD_PROD',
    IIFE_DEV: 'IIFE_DEV',
    IIFE_PROD: 'IIFE_PROD',
    DEMO_PROD: 'DEMO_PROD',
    DOC_PROD: 'DOC_PROD'
};
let tasks = [];

//attributes for different bundles
function makeBundleAttributes(bundleType){
    let atrs = {
        path: '',
        env: 'development',
        format: 'iife',
        sourceMap: true,
        plugins: []
    };

    switch (bundleType) {
        case Bundles.UMD_PROD:
            atrs.env = 'production';
            atrs.sourceMap = false;
            atrs.plugins.push(uglify());
        case Bundles.UMD_DEV:
            atrs.path = './build/packages/';
            atrs.format = 'umd';
            break;
        case Bundles.IIFE_PROD:
            atrs.env = 'production';
            atrs.sourceMap = false;
            atrs.plugins.push(uglify());
        case Bundles.IIFE_DEV:
            atrs.path = './build/dist/';
            break;
    }

    return atrs;
}

//rollup config generations
function makeConfig(bundleType){
    let atrs = makeBundleAttributes(bundleType);
    let config = {
      entry: 'src/index.js',
      plugins: [
        less({
          output: atrs.path + 'react-weui.css'
        }),
        cjs({
          include: 'node_modules/**',
          namedExports: {
            'node_modules/react/react.js': ['PropTypes', 'Component']
          }
        }),
        babelRollup({
          babelrc: false,
          exclude: 'node_modules/**',
          presets: [ [ 'es2015', { modules: false } ], 'stage-2', 'react' ],
          plugins: [ 'external-helpers' ]
        }),
        replace({ 'process.env.NODE_ENV': JSON.stringify(atrs.env) }),
        resolveNode({
          jsnext: true,
          main: true
        }),
      ].concat(atrs.plugins),
      external: ['react', 'react-dom'],
    };

    if (showWrite){
        config.plugins.push(progress({
          clearLine: false
        }));
    }

    return config;
}

//create a promise task
function createTask(msg, fn){
    return () => {
        CLI.section(msg);
        return new Promise((res, rej) => fn(res, rej));
    };
}

//run async tasks in sync to avoid output mess
function runTasks($tasks){
    let index = 0;

    return new Promise( (res, rej) => {

        function next() {
            if (index < $tasks.length) {
                $tasks[index]().then(next, rej);
                index++;
            } else {
                res();
            }
        }

        next();
    });
}

function createNodeBuild(){
    return (res, rej)=>{
        let count = 0;
        let bat = exec('NODE_ENV=production babel ./src --out-dir ./build/packages --copy-files', { stdio: [0, 1, 2] }, (error, stdout, stderr) => {
              if (error) {
                rej(error);
                return;
              }
        });
        bat.stdout.on('data', (data) => {
          CLI.write(count++, data);
        });
        bat.on('exit', (code) => {
          res(code);
        });
    };
}

function createWebpackBuild(config){
    return (res, rej) => {
        webpack(config, (err, stats) => {
          if (err || stats.hasErrors()) {
            rej('webpack build error');
          }
          log(stats.toString({
            chunks: false,  // Makes the build much quieter
            colors: true    // Shows colors in the console
          }));
          res();
        });
    };
}

function createBundle(bundleType){
    let atrs = makeBundleAttributes(bundleType);
    return (res, rej)=>{
        rollup(makeConfig(bundleType))
        .then( bundle => {
            CLI.section('Writing Bundle to file');
            return bundle.write({
              moduleName: 'WeUI',
              dest: atrs.path + (atrs.env === 'production' ? 'react-weui.min.js' : 'react-weui.js'),
              format: atrs.format,
              sourceMap: atrs.sourceMap
            });
        })
        .then(()=>{
            res();
        })
        .catch(err=>{
            rej(err);
        });
    };
}

//clean directory
rimraf('build', ()=>{
  // create a new build directory
  fs.mkdirSync('build');
  // create the packages folder for NODE+UMD bundles
  fs.mkdirSync(join('build', 'packages'));
  // create the dist folder for UMD bundles
  fs.mkdirSync(join('build', 'dist'));
  // adding build tasks
  tasks.push(
    //Node individual components build
    createTask('Making Babel Modules', createNodeBuild()),
    createTask('Making UMD Dev Bundles', createBundle(Bundles.UMD_DEV)),
    createTask('Making UMD Production Bundles', createBundle(Bundles.UMD_PROD)),
    createTask('Making IIFE Dev Bundles', createBundle(Bundles.IIFE_DEV)),
    createTask('Making IIFE Production Bundles', createBundle(Bundles.IIFE_PROD)),
    createTask('Making Demo Build', createWebpackBuild(webpackConfig) ),
    createTask('Making Docs Build', createWebpackBuild(webpackDocConfig) )
  );

  // run tasks
  runTasks(tasks).then( () => {
        // all done here
        CLI.section('FINISH BUILD');
  }, err => {
        // rejection happened
        log('Error', err);
  });

});
