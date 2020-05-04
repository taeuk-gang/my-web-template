module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "targets": {
          "esmodules": true
        }
      }
    ],
    "@babel/preset-typescript"
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ],
}