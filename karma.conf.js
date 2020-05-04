const { createDefaultConfig } = require('@open-wc/testing-karma');
const merge = require('deepmerge');

process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = (config) => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        // runs all files ending with .test in the test folder,
        // can be overwritten by passing a --grep flag. examples:
        //
        // npm run test -- --grep test/foo/bar.test.js
        // npm run test -- --grep test/bar/*
        { pattern: config.grep ? config.grep : 'test/**/*.test.js', type: 'module' },
      ],

      basePath: '',
      colors: true,
      reporters: ['progress'],
      browsers: ['ChromeHeadless'],

      plugins: [
        // load plugin
        require.resolve('@open-wc/karma-esm'),
    
        // fallback: resolve any karma- plugins
        'karma-*',
      ],

      frameworks: ['esm', 'mocha'],

      esm: {
        nodeResolve: true,
        babel: true,
        fileExtensions: [`.ts`],
      },
      // you can overwrite/extend the config further
    }),
  );
  return config;
};
