import React from "react"
import { Link } from "gatsby"

const Experience = () => {
  return (
      
    <div className="experience">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <section id="experiences">
            <h3>Experiences</h3>
            <h4>Computer Vision Research Intern at Mediatek</h4>
              <p>Prototyped a novel view synthesis pipeline to for the "Dolly Zoom Effect" with single shot and multi-shot inputs with PyTorch and OpenCV.  
                  Reviewed and integrated modules based on papers regarding state-of-the-art deep learning approaches to monocular depth estimation, flow estimation, 
                  and generative inpainting. Contributed dataset pipeline for research paper "A Novel Reference-based Image Inpainting Network for Synthesized Dolly Zoom Image" 
                  which will be submitted to Conference on Computer Vision and Pattern Recognition (CVPR) 2022. 
              </p>
            <h4>Research Assistant at Arac Lab of Neurology</h4>
                <p>
                    Modelled time sequenced neural data from ten brain regions of a mouse during a restrained reach and grasp movement with a recurrent
                    neural network. Migrated code to Tensorflow 2 and enabled GPU model training. Currently working on a spatio-temporal transformer based kinematic decoder 
                    with Keras. Receiver of Undergraduate Research Scholarship for conducting a research project with faculty member and presenting a comprehensive
                    research paper.
                </p>
            <h4>Front-end Development Intern at Ubiik</h4>
                <p>
                    Built login and data analytics page of web service for smart electric meter management using AngularJS and NgRx, allowing clients to 
                    view power consumption over time. Modernized UX interface by integrating responsive web design practices with CSS and JavaScript.
                    Collaborated successfully with test engineers, back end developers, and supervisors in a diverse, multilingual workspace to accelerate project 
                    timeline in a high-pressure start up environment.
                </p>
            </section>
            <br></br>
            <br></br>
                <section id="projects">
                <h3>Projects</h3>
                <h4>Reinforcement Learning Cars</h4>
                <p>I used Unity's ML-Agents package to simulate and train cars to drive around a race track. They were trained with the proximity policy optimization algorithm implemented in C#.</p>
                <h4>Price Predictor</h4>
                <p>I modelled price over time of different cryptocurrencies with a long short term memory recurrent neural network to give price predictions using Keras, 
                    pandas, numpy, and scikit-learn.</p>
                <h4>ERC-20 Token</h4>
                <p>I coded an ERC-20 token in Solidity and deployed it to the Ropsten testnet.</p>
                <h4>Form Watcher</h4>
                <p>Olympic weightlifting form classifier with OpenCV and Mediapipe.</p>
                <h4>Tower of Saviors Board Solver</h4>
                <p>I reformulated a popular mobile puzzle game as the 8 puzzle search problem and wrote a solver function in C++.</p>
                <h4>Highlight.ai</h4>
                <p>Command line interface tool that leverages OpenAI to help students highlight and summarize keypoints during Zoom lectures.</p>
                </section>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Experience