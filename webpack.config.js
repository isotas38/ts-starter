module.exports = {
  entry: __dirname + '/src/app.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.ts', '.js']
  },
  module: {
    preLoaders: [
      {test: /\.ts$/, loader: 'tslint-loader'}
    ],
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      {test: /\.json$/, loader: 'json-loader'}
    ],
    postLoaders: [
      { test: /_test\.ts$/, loader: 'webpack-espower-loader' }
    ]
  }
};
