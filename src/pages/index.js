import React from "react"

import Scrollbar from "smooth-scrollbar"


import Header from "../components/header"
import AboutMe from "../components/aboutme"
import Experience from "../components/experience"
import Footer from "../components/footer"
import "../styles/styles.scss"

const IndexPage = () => (
  <div>
    <Header />
    <AboutMe />
    <Experience />
    <Footer />
  </div>
)

export default IndexPage