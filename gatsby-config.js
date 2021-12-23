module.exports = {
  siteMetadata: {
    siteUrl: "https://amarchenko.de",
    title: "Andrey Marchenko",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
};
