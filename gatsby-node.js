const path = require('path')

// Make import aliases
exports.onCreateWebpackConfig = ({ actions: { setWebpackConfig }}) => {
  setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
      },
    },
  })
}
