const { ModuleFederationPlugin } = require('webpack').container;
const { createConfig } = require('@edx/frontend-build');

module.exports = createConfig('webpack-dev', {
  plugins: [
    new ModuleFederationPlugin({
      name: 'profile',
      filename: 'remote.js',
      exposes: {
        './app': './src/export.jsx',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '16.14.0',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '16.14.0',
        },
      },
    }),
  ],
});
