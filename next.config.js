module.exports = {
  target: 'serverless',
  exportTrailingSlash: true,
  baseUrl: "/docs"
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/about': { page: '/about' },
  //   }
  // },
}