module.exports = {
  siteMetadata: {
    title: 'Leiiid by Example',
    author: 'Richard Loveless III'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}
