module.exports = {
  outputDir: 'dist',
  assetsDir: 'dist/assets',
  css: {
    extract: {
      filename: '[name].css',
    },
    sourceMap: true,
  },
  chainWebpack: (config) => {
    config.plugins.delete('progress');
    config.optimization.splitChunks(false);
  },
  configureWebpack: {
  },
  runtimeCompiler: true,
};