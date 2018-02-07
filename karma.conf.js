module.exports = function (config) {
  config.set({
    files: [
      "src/**/*.ts",
      "test/**/*.ts"
    ],
    frameworks: ['mocha', 'chai', 'karma-typescript'],
    plugins: [
      require('karma-mocha'),
      require('karma-chai'),
      require("karma-coverage"),
      require("karma-chrome-launcher"),
      require("karma-htmlfile-reporter"),
      require("karma-spec-reporter"),
      require('karma-mocha-reporter'),
      require('karma-typescript')
    ],
    preprocessors: {
      "**/*.ts": ['karma-typescript', "coverage"]
    },
    karmaTypescriptConfig: {
      bundlerOptions: {
        entrypoints: /\.spec\.ts$/
      },
      compilerOptions: {
        lib: ["es2015"]
      }
    },
    reporters: ['spec', 'coverage', 'html', 'mocha'],
    coverageReporter: {
      dir: 'build/coverage/',
      reporters: [
        { type: 'html' },
        { type: 'text' },
        { type: 'text-summary' }
      ]
    },
    htmlReporter: {
      outputFile: 'tests/units.html',
      pageTitle: 'Unit Tests',
      subPageTitle: 'A sample project description',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    },
    client: {
      mocha: {
        ui: 'bdd',
        timeout: '5000'
      }
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};   