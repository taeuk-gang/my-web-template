import merge from 'deepmerge';
// use createSpaConfig for bundling a Single Page App
import { createSpaConfig } from '@open-wc/building-rollup';

// Plugin
import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';
import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';

// use createBasicConfig to do regular JS to JS bundling
// import { createBasicConfig } from '@open-wc/building-rollup';

const baseConfig = createSpaConfig({
  // use the outputdir option to modify where files are output
  // outputDir: 'dist',

  // if you need to support older browsers, such as IE11, set the legacyBuild
  // option to generate an additional build just for this browser
  legacyBuild: true,

  // development mode creates a non-minified build for debugging or development
  developmentMode: process.env.ROLLUP_WATCH === 'true',

  // set to true to inject the service worker registration into your index.html
  injectServiceWorker: false,

  polyfillsLoader: {
    polyfills: {
      hash: true,
      coreJs: true,
      fetch: true,
      abortController: true,
      regeneratorRuntime: true,
      dynamicImport: true,
      webcomponents: true,
      intersectionObserver: true,
      resizeObserver: true,
    },
  },
});

export default merge(baseConfig, {
  // if you use createSpaConfig, you can use your index.html as entrypoint,
  // any <script type="module"> inside will be bundled by rollup
  input: './index.html',
  plugins: [
    typescript(),
    filesize(),
    babel({
      babelHelpers: 'bundled',
    }),
    copy({
      targets: [
        { src: './src/assets/**/*', dest: './dist' }
      ],
      // set flatten to false to preserve folder structure
      flatten: false,
    }),
  ],

  // alternatively, you can use your JS as entrypoint for rollup and
  // optionally set a HTML template manually
  // input: './app.js',
});
