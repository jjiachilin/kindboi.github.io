import { Link } from "gatsby"
import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = () => (
  <header>
    <div className="container">
        <div className="navigation">
            <nav>
            <button onClick={() => scrollTo('#about')}>About Me</button>
            <button onClick={() => scrollTo('#experiences')}>Experiences</button>
            <button onClick={() => scrollTo('#projects')}>Projects</button>
            <button onClick={() => scrollTo('#contact')}>Contact</button>
            </nav>
        </div>
    </div>
  </header>
)

export default Header