import { Link } from "gatsby"
import React from "react"
import Github from "../images/github.jpg"
import LinkedIn from "../images/linkedin.png"
import Medium from "../images/medium.png"

const Footer = () => (
  <footer>
    <section id="contact">
        <div className="container">
            <div className="contact">
                <div className="links">
                    <a href="https://github.com/kindboi"><img src={Github} width="50" height="50" /></a>
                    <a href="https://www.linkedin.com/in/joseph-lin-91414136/"><img src={LinkedIn} width="50" height="50" /></a>
                    <a href="https://jj-lin42.medium.com/"><img src={Medium}  width="50" height="50" /></a>
                </div>
            </div>
        </div>
    </section>
  </footer>
)

export default Footer