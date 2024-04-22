const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// module.exports = {
//   devServer: {
//     proxy: {
//       '^/api': {
//         target: 'http://192.168.1.248:8000',
//         changeOrigin: true
//       },
//     }
//   }
// }
