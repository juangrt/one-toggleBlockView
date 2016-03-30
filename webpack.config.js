module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist/',
    filename: 'bundle.js'
  },
  // Add resolve.extensions.
  // '' is needed to allow imports without an extension.
  // Note the .'s before extensions as it will fail to match without!!!
  resolve: {
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: /src/,
        loader: 'babel-loader'
      } ,
      { test: /\.css$/, 
        include: /src/,
        loader: "style!css" 
      }
    ]
  }
};