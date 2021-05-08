const { ANALYZE } = process.env;

module.exports = {
  distDir: '.build',
  webpack: config => {
    config.module.rules.push({
      test: /.*\.(test|spec)\.(ts|tsx|js|jsx)$/,
      loader: 'ignore-loader'
    })
    
    if (ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true
        })
      )
    }
    return config;
  },
  env: {}
}