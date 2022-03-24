import React, { Component } from "react";
import Foot from "./footer";
import Nav from "./nav";
import background from "../images/background.png";
import { Grid, Cell } from "react-mdl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import case1 from "../images/case1.png";
class CaseStudy extends Component {
  render() {
    return (
      <>
        <div className="casestudies">
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
                    <Cell style={{ display: "inline-block" }}>
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
                          Case Studies
                        </h1>
                        <p
                          className="animate full fadeInUp animated"
                          data-animate="fadeInUp"
                          data-delay="0.8s"
                          style={{
                            animationDelay: "0.8s",
                            visibility: "visible",
                            width: "100% !important",
                          }}
                        >
                          We have worked on numerous projects that span accross
                          different fields, using many technologies. Some of
                          these projects are highlighted in the list below
                        </p>
                      </span>
                    </Cell>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
          <div className="whoarewe">
            <div className="wrapss">
              <div className="container">
                <div
                  className="case-detail-blk animate clearfix fadeInLeft animated"
                  data-animate="fadeInLeft"
                >
                  <div className="case-dtls">
                    <Grid>
                      <Cell col={4}>
                        <div class="case_pic">
                          <img src={case1} alt="Case One" />
                        </div>
                      </Cell>
                      <Cell col={8}>
                        <h3>Box1</h3>
                        <h4>Web and Mobile Applications</h4>
                        <p>
                          Box1 is a logistics and delivery company, where most
                          solutions require customer to call and request for
                          pickup, text address and so on which resulted in
                          wasting of valuable time. with us Box1 gets its job
                          done in minutes where all there systems is automated
                          including the payment method, tracking system, and
                          user verification.
                        </p>
                        <div className="tag-area">
                          <h4>Technologies</h4>
                          <ul>
                            <li>
                              <a href="/">REACTJS</a>
                            </li>
                            <li>
                              <a href="/">NODEJS</a>
                            </li>
                            <li>
                              <a href="/">MySQL</a>
                            </li>
                            <li>
                              <a href="/">ExpressJS</a>
                            </li>
                            <li>
                              <a href="/">ReactNative</a>
                            </li>
                            <li>
                              <a href="/">AWS</a>
                            </li>
                          </ul>
                        </div>
                        <div className="see-more">
                          <a
                            href="https://www.box1.ng"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            See case study{" "}
                            <span>
                              {" "}
                              <FontAwesomeIcon
                                style={{
                                  position: "relative",
                                  lineHeight: "10px",
                                  top: "0.2em",
                                  marginLeft: "4px",
                                }}
                                icon={faArrowRight}
                              />
                            </span>
                          </a>
                        </div>
                      </Cell>
                    </Grid>
                  </div>
                </div>
                <div
                  className="case-detail-blk animate clearfix fadeInRight animated"
                  data-animate="fadeInRight"
                >
                  <div className="case-dtls">
                    <Grid>
                      <Cell col={4}></Cell>
                      <Cell col={8}>
                        <h3>Nigerian Army CT-COIN Museum Buratai</h3>
                        <h4>Installation of vsat KA satelite internet</h4>
                        <p>
                          Provision of Internet and wireless access for staff
                          and the control room of CT-COIN Museum Buratai,Biu
                          Borno State.
                        </p>
                        <div className="tag-area">
                          <h4>Technologies</h4>
                          <ul>
                            <li>
                              <a href="/">HUGHES</a>
                            </li>
                            <li>
                              <a href="/">ASTA</a>
                            </li>
                          </ul>
                        </div>
                      </Cell>
                    </Grid>
                  </div>
                </div>
                <div
                  className="case-detail-blk animate clearfix fadeInLeft animated"
                  data-animate="fadeInLeft"
                >
                  <div className="case-dtls">
                    <Grid>
                      <Cell col={4}></Cell>
                      <Cell col={8}>
                        <h3>Federal Polytechnic Damaturu</h3>
                        <h4>
                          Networking and Installation of vsat KA satelite
                          internet
                        </h4>
                        <p>
                          Networking and Provision of Internet service for the
                          entire E-Library section of Federal Polytechnic
                          Damaturu.
                        </p>
                        <div className="tag-area">
                          <h4>Technologies</h4>
                          <ul>
                            <li>
                              <a href="/">HUGHES</a>
                            </li>
                            <li>
                              <a href="/">ASTA</a>
                            </li>
                          </ul>
                        </div>
                      </Cell>
                    </Grid>
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

export default CaseStudy;
