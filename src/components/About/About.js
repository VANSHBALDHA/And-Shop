import React from "react";
import { Link } from "react-router-dom";
import aboutimage from "../../assets/Images/about2.jpg";
import about1 from "../../assets/Images/about-1.jpg";
import about2 from "../../assets/Images/about-2.jpg";
import about3 from "../../assets/Images/about-3.jpg";
import about4 from "../../assets/Images/about-4.jpg";
import "./Index.css";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <>
      <Helmet>
        <title>AND SHOP - About</title>
      </Helmet>
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-text">
                <h2>About us</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item items">About</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-store">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div>
                <img src={aboutimage} alt="about-image" className="w-100" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-text">
                <h2>ABOUT OUR AND SHOP STORE</h2>
                <h4>
                  We believe that every project existing in digital world is a
                  result of an idea and every idea has a cause.
                </h4>
                <p>
                  For this reason, our each design serves an idea. Our strength
                  in design is reflected by our name, our care for details. Our
                  specialist won't be afraid to go extra miles just to approach
                  near perfection. We don't require everything to be perfect,
                  but we need them to be perfectly cared for.
                </p>
                <p>
                  That's a reason why we are willing to give contributions at
                  best.Not a single detail is missed out under Billey's
                  professional eyes. The amount of dedication and effort equals
                  to the level of passion and determination. Get better,
                  together as one. Proin eget tortor risus. Praesent sapien
                  massa, convallis a pellentesque nec, egestas non nisi.
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Quisque velit nisi, pretium ut lacinia in, elementum id
                  enim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-main">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="about-card">
                <div className="card-image">
                  <img src={about1} alt="About" />
                </div>
                <div className="card-info">
                  <h3>Creative Always</h3>
                  <p>
                    Stay creative with Billey and the huge collection of premade
                    elements, layouts & effects.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="about-card">
                <div className="card-image">
                  <img src={about2} alt="About" width="70px" />
                </div>
                <div className="card-info">
                  <h3>Express Customization</h3>
                  <p>
                    Easy to install and configure the theme customization in a
                    few clicks with Billey.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="about-card">
                <div className="card-image">
                  <img src={about3} alt="About" width="70px" />
                </div>
                <div className="card-info">
                  <h3>Premium Integrations</h3>
                  <p>
                    Integrated premium plugins in Billey is the secret weapon
                    for your business to thrive.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="about-card">
                <div className="card-image">
                  <img src={about4} alt="About" width="70px" />
                </div>
                <div className="card-info">
                  <h3>Real-time Editing</h3>
                  <p>
                    Edit your work and preview the changes on the screen live
                    with advanced page builder.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
