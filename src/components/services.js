import React, { Component } from "react";
import Foot from "./footer";
import Nav from "./nav";
import background from "../images/background.png";
import { Grid, Cell } from "react-mdl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faChalkboardTeacher,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import development from "../images/cartoon5.png";
import training from "../images/cartoon6.png";
import consult from "../images/cartoon7.png";

class Services extends Component {
  render() {
    return (
      <>
        <div className="services">
          <div
            className="wrapper contact-wrapper"
            style={{
              backgroundImage: `url(${background})`,
            }}
          >
            <div>
              <Nav />
            </div>
            <div className="welcome">
              <div
                style={{
                  width: "100%",
                  margin: "auto",
                  display: "inline-block",
                }}
              >
                {" "}
                <div className="wrapss">
                  <Grid className="demo-grid-1">
                    <Cell col={6} style={{ display: "inline-block" }}>
                      <span className="text">
                        <h1
                          className="animate fadeIn animated"
                          data-animate="fadeIn"
                          data-delay="0.5s"
                          style={{
                            animationDelay: "0.5s",
                            visibility: "visible",

                            fontWeight: "400 !important",
                          }}
                        >
                          Services we provide
                        </h1>
                        <p
                          className="animate full fadeInUp animated"
                          data-animate="fadeInUp"
                          data-delay="0.8s"
                          style={{
                            animationDelay: "0.8s",
                            visibility: "visible",
                          }}
                        >
                          We have all the resources and people with the relevant
                          skills to bring your project to life. Ranging from
                          design, software development and project management.
                        </p>
                      </span>
                    </Cell>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
          <div className="whoarewe toppers">
            <div className="wrapss">
              <div className="container">
                <div className="row">
                  <div
                    className="col-md-7 animate fadeInLeft animated"
                    data-animate="fadeInLeft"
                    style={{ visibility: "visible" }}
                  >
                    <div className="playbook_pic">
                      <img src={development} alt="Software Development" />
                    </div>
                  </div>
                  <div
                    className="col-md-5 animate fadeInRight animated"
                    data-animate="fadeInRight"
                    style={{ visibility: "visible" }}
                  >
                    <div className="plabook_text">
                      <div className="srvc_icon">
                        <FontAwesomeIcon
                          style={{
                            position: "relative",
                            color: "#5d64fb",
                            fontSize: "30px",
                            fontWeight: "bold",
                            top: "0em",
                          }}
                          icon={faLaptopCode}
                        />
                      </div>
                      <h2>Development</h2>
                      <div className="play_para">
                        <p>
                          We develop products that cut across all platforms,{" "}
                          <br />
                          our world class software engineers can bring your
                          projects to life.
                        </p>
                      </div>
                      <div className="service_btn inspire_btn">
                        <nav className="smaller playb">
                          <ul>
                            <li style={{ color: "#fff !important" }}>
                              Learn More
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="whatwedo toppers">
            <div className="wrap">
              <div className="container">
                <div className="row">
                  <div
                    className="col-md-7 animate fadeInRight  animated"
                    data-animate="fadeInLeft"
                    style={{ visibility: "visible" }}
                  >
                    <div className="playbook_pic">
                      <img src={training} alt="Software Development" />
                    </div>
                  </div>
                  <div
                    className="col-md-5 animate fadeInLeft  animated"
                    data-animate="fadeInRight"
                    style={{ visibility: "visible" }}
                  >
                    <div className="plabook_text">
                      <div className="srvc_icon">
                        <FontAwesomeIcon
                          style={{
                            position: "relative",
                            color: "#5d64fb",
                            fontSize: "30px",
                            fontWeight: "bold",
                            top: "0em",
                          }}
                          icon={faChalkboardTeacher}
                        />
                      </div>
                      <h2>Training</h2>
                      <div className="play_para">
                        <p>
                          We offer design, software development, data science
                          and agile project management training.
                        </p>
                      </div>
                      <div className="service_btn inspire_btn">
                        <nav className="smaller playb">
                          <ul>
                            <li>
                              Learn More
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="skills toppers">
            <div className="wrap">
              <div className="container">
                <div className="row">
                  <div
                    className="col-md-7 animate fadeInLeft animated"
                    data-animate="fadeInLeft"
                    style={{ visibility: "visible" }}
                  >
                    <div className="playbook_pic">
                      <img src={consult} alt="Software Development" />
                    </div>
                  </div>
                  <div
                    className="col-md-5 animate fadeInRight animated"
                    data-animate="fadeInRight"
                    style={{ visibility: "visible" }}
                  >
                    <div className="plabook_text">
                      <div className="srvc_icon">
                        <FontAwesomeIcon
                          style={{
                            position: "relative",
                            color: "#5d64fb",
                            fontSize: "30px",
                            fontWeight: "bold",
                            top: "0em",
                          }}
                          icon={faHandshake}
                        />
                      </div>
                      <h2>Consultancy</h2>
                      <div className="play_para">
                        <p>
                          Let us help you or your organization with tech related
                          projects and solutions.
                        </p>
                      </div>
                      <div className="service_btn inspire_btn">
                        <nav className="smaller playb">
                          <ul>
                            <li>
                              Contact Us
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Foot />
        </div>
      </>
    );
  }
}

export default Services;
