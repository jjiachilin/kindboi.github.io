module.exports = {
  siteMetadata: {
    title: "Portfolio",
    menuItems: [
      {path: "about", label: "About"},
      {path: "experience", label: "Experience"},
      {path: "projects", label: "Projects"},
      {path: "contact", label: "Contact Me"},
    ]
  },
  plugins: ["gatsby-plugin-gatsby-cloud", "gatsby-plugin-sitemap", "gatsby-plugin-sass", "gatsby-plugin-smoothscroll", "react-scrollspy"],
};
