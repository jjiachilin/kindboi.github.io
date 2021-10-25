import React from "react"
import { Link } from "gatsby"
import Coin from "../images/tenor.gif"

const AboutMe = () => {
  return (
    <section id="about">
      <div className="about-blurb">
        <div className="container">
          <div className="heading">
            <img src={Coin} height="23" width="23" />
            <h3>Hi, I'm Joseph</h3>
            <img src={Coin} height="23" width="23" />
          </div>
          <div className="inner-blurb">
            <div className="content">
              <p>
                I'm a senior studying computer science at UCLA Engineering. 
                My academic passions include: machine learning, computer vision, distributed/decentralized 
                systems, blockchain technology. When I'm not studying or working on technical 
                projects or doing research, I enjoy reading novels, playing basketball and working 
                out with friends, and writing about tech that excites me. Check me out on 
                Medium in the contact section!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe