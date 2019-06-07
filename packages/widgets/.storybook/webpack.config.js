const path = require('path');
// const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

const modulesPath = path.resolve(__dirname);
module.exports = {
  plugins: [
    // new WebpackBuildNotifierPlugin({
    //   title: 'React Example Storybook Build',
    //   warningSound: true,
    //   failureSound: true,
    // }),
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        include: [/node_modules\/core/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react'],
            },
          },
          { loader: 'source-map-loader' },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ],
      }
    ],
  }
};
