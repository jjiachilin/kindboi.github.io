module.exports = {
  siteMetadata: {
    title: "Portfolio",
    siteUrl: "https://kindboi.github.io/",
    menuItems: [
      {path: "about", label: "About"},
      {path: "experience", label: "Experience"},
      {path: "projects", label: "Projects"},
      {path: "contact", label: "Contact Me"},
    ]
  },
  plugins: ["gatsby-plugin-gatsby-cloud", "gatsby-plugin-sitemap", "gatsby-plugin-sass", "gatsby-plugin-smoothscroll"],
};
