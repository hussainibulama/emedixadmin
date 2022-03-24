import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import homebanner from "../images/banns.png";
import homebanner2 from "../images/businessman.jpg";

import fliper from "../images/shop.png";
import manage from "../images/manage.png";
import Foot from "./footer";
import Nav from "./nav";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faSmile, faWallet } from "@fortawesome/free-solid-svg-icons";
class Home extends Component {
  render() {
    return (
      <>
        <div className="home">
          <div className="wrapper">
            <div className="navs">
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
                  <Grid className="demo-grid-1" style={{ marginTop: "10em" }}>
                    <Cell
                      col={6}
                      className="lower"
                      style={{
                        display: "inline-block",
                        margin: "0px",
                      }}
                    >
                      <span className="text">
                        <h1
                          className="animate fadeIn animated"
                          data-animate="fadeIn"
                          data-delay="0.5s"
                          style={{
                            animationDelay: "0.5s",
                            visibility: "visible",
                          }}
                        >
                          Build and deploy your e-commerce website with no code
                        </h1>
                        <p
                          className="animate fadeInUp animated"
                          data-animate="fadeInUp"
                          data-delay="0.8s"
                          style={{
                            animationDelay: "0.8s",
                            visibility: "visible",
                          }}
                        >
                          Selling online with your own e-commerce website has
                          never been easier, faster, or more scalable. Impress
                          your customers with a beautiful store.
                        </p>
                        <nav className="smaller">
                          <ul>
                            <div
                              style={{
                                width: "100%",
                                display: "inline-flex",
                              }}
                            >
                              <Link
                                to="/auth/signup"
                                style={{ color: "#fff !important" }}
                              >
                                <li>
                                  {" "}
                                  Start free trial
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                </li>
                              </Link>
                              <Link
                                className="linker  link--arrowed"
                                style={{
                                  position: "relative",
                                  lineHeight: "3em",
                                  left: "2em",
                                }}
                              >
                                Contact Sales
                                <svg
                                  className="arrow-icon"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="22"
                                  viewBox="0 0 32 32"
                                >
                                  <g
                                    fill="none"
                                    stroke="#1971f5"
                                    stroke-width="1.5"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                  >
                                    <circle
                                      class="arrow-icon--circle"
                                      cx="16"
                                      cy="16"
                                      r="15.12"
                                    ></circle>
                                    <path
                                      class="arrow-icon--arrow"
                                      d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
                                    ></path>
                                  </g>
                                </svg>
                              </Link>
                            </div>
                          </ul>
                        </nav>
                      </span>
                    </Cell>

                    <Cell className="ridicule" col={6}>
                      <div
                        className="mobile_pic animate fadeIn animated"
                        data-animate="fadeIn"
                        data-duration="0.8s"
                        style={{
                          animationDuration: "0.8s",
                          visibility: "visible",
                        }}
                      >
                        <img src={homebanner} alt="Home Banner" />
                      </div>
                    </Cell>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
          <div className="secondrow">
            <div className="wrapss">
              <div className="welcomes_note">
                <h1>Take your business online without writing any code</h1>
                <p>
                  Create an e-commerce website backed by powerful tools that
                  help you find customers, drive sales, and manage your
                  day-to-day.
                </p>
              </div>
              <Grid style={{ position: "relative", top: "3em" }}>
                <Cell col={4}>
                  <div className="ring">
                    <i className="root">
                      <FontAwesomeIcon
                        className="inl"
                        style={{
                          position: "relative",

                          color: "#fff",
                          fontSize: "40px",
                          fontWeight: "bold",
                        }}
                        icon={faSmile}
                      />
                    </i>

                    <h2 style={{ color: "#000000" }}>Ease of usage</h2>
                  </div>
                </Cell>

                <Cell col={4}>
                  <div className="ring">
                    <i className="root">
                      <FontAwesomeIcon
                        className="inl"
                        style={{
                          position: "relative",

                          color: "#fff",
                          fontSize: "40px",
                          fontWeight: "bold",
                        }}
                        icon={faWallet}
                      />
                    </i>

                    <h2>Instant Withdrawal</h2>
                  </div>
                </Cell>
                <Cell col={4}>
                  {" "}
                  <div className="ring">
                    <i className="root">
                      <FontAwesomeIcon
                        className="inl"
                        style={{
                          position: "relative",

                          color: "#fff",
                          fontSize: "40px",
                          fontWeight: "bold",
                        }}
                        icon={faClock}
                      />
                    </i>

                    <h2>Preorder</h2>
                  </div>
                </Cell>
              </Grid>
            </div>
          </div>

          <div className="thirdrow">
            <div className="wrapss">
              <div className="welcomes_note">
                <h1>With you wherever you’re going</h1>
                <p>
                  One platform with all the e-commerce and point of sale
                  features you need to start, run, and grow your business.
                </p>
              </div>
              <Grid className="demo-grid-1">
                <Cell col={6}>
                  <div style={{ width: "100%", height: "100%" }}>
                    <img
                      src={fliper}
                      style={{
                        position: "relative",
                      }}
                      alt="Home Banner"
                    />
                  </div>
                </Cell>
                <Cell col={6}>
                  <div className="toplets">
                    <h3>
                      Promote <br></br> your business
                    </h3>
                    <p>
                      Take the guesswork out of marketing with built-in tools
                      that help you create, execute, and analyze digital
                      marketing campaigns.
                    </p>
                    <Link
                      className="linker  link--arrowed"
                      style={{
                        position: "relative",
                        lineHeight: "3em",
                      }}
                    >
                      Explore ways to promote your business
                      <svg
                        className="arrow-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 32 32"
                      >
                        <g
                          fill="none"
                          stroke="#1971f5"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                        >
                          <circle
                            class="arrow-icon--circle"
                            cx="16"
                            cy="16"
                            r="15.12"
                          ></circle>
                          <path
                            class="arrow-icon--arrow"
                            d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
                          ></path>
                        </g>
                      </svg>
                    </Link>
                  </div>
                </Cell>
              </Grid>
              <Grid className="demo-grid-1">
                <Cell col={6}>
                  <div className="toplets">
                    <h3>
                      Manage <br></br> everything
                    </h3>
                    <p>
                      Gain the insights you need to grow—use a single dashboard
                      to manage orders, shipping, and payments anywhere you go.
                    </p>
                    <Link
                      className="linker  link--arrowed"
                      style={{
                        position: "relative",
                        lineHeight: "3em",
                      }}
                    >
                      Explore how to manage your business
                      <svg
                        className="arrow-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 32 32"
                      >
                        <g
                          fill="none"
                          stroke="#1971f5"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                        >
                          <circle
                            class="arrow-icon--circle"
                            cx="16"
                            cy="16"
                            r="15.12"
                          ></circle>
                          <path
                            class="arrow-icon--arrow"
                            d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
                          ></path>
                        </g>
                      </svg>
                    </Link>
                  </div>
                </Cell>
                <Cell col={6}>
                  <div style={{ width: "100%", height: "100%" }}>
                    <img
                      src={manage}
                      style={{
                        position: "relative",
                      }}
                      alt="Home Banner"
                    />
                  </div>
                </Cell>
              </Grid>
            </div>
          </div>
          <div className="fourthrow">
            <div className="wrapss">
              <div className="contents">
                <h3>Empowering independent business owners everywhere </h3>
                <p>
                  Over <b>500 local business</b> in Africa uses our products and
                  generate alot of revenue using swip.
                </p>
              </div>
            </div>
          </div>
          <div className="fifthrow">
            <div className="wrap">
              <Grid className="demo-grid-1">
                <Cell col={6}>
                  <h3>
                    Get the help you need, <br></br> every step ahead
                  </h3>
                  <Grid style={{ width: "w" }}>
                    <Cell col={6}>
                      <div className="mint">
                        <h4>Support</h4>
                        <p>
                          Contact support 24/7, whether you’re troubleshooting
                          issues or looking for business advice.
                        </p>
                        <Link
                          className="linker  link--arrowed"
                          style={{
                            position: "relative",
                            lineHeight: "3em",
                          }}
                        >
                          Contact Support
                          <svg
                            className="arrow-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 32 32"
                          >
                            <g
                              fill="none"
                              stroke="#1971f5"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            >
                              <circle
                                class="arrow-icon--circle"
                                cx="16"
                                cy="16"
                                r="15.12"
                              ></circle>
                              <path
                                class="arrow-icon--arrow"
                                d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
                              ></path>
                            </g>
                          </svg>
                        </Link>
                      </div>
                      <div className="mint">
                        <h4>Experts Marketplace</h4>
                        <p>
                          Hire an expert to help you with everything from store
                          setup to SEO.
                        </p>
                        <Link
                          className="linker  link--arrowed"
                          style={{
                            position: "relative",
                            lineHeight: "3em",
                          }}
                        >
                          Explore the market place
                          <svg
                            className="arrow-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 32 32"
                          >
                            <g
                              fill="none"
                              stroke="#1971f5"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            >
                              <circle
                                class="arrow-icon--circle"
                                cx="16"
                                cy="16"
                                r="15.12"
                              ></circle>
                              <path
                                class="arrow-icon--arrow"
                                d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
                              ></path>
                            </g>
                          </svg>
                        </Link>
                      </div>
                    </Cell>
                    <Cell col={6}>
                      <div className="mint">
                        <h4>App store</h4>
                        <p>
                          Add features and functionality to your business with
                          4,100+ apps that integrate directly with our system.
                        </p>
                        <Link
                          className="linker  link--arrowed"
                          style={{
                            position: "relative",
                            lineHeight: "3em",
                          }}
                        >
                          Visit our App Store
                          <svg
                            className="arrow-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 32 32"
                          >
                            <g
                              fill="none"
                              stroke="#1971f5"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            >
                              <circle
                                class="arrow-icon--circle"
                                cx="16"
                                cy="16"
                                r="15.12"
                              ></circle>
                              <path
                                class="arrow-icon--arrow"
                                d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
                              ></path>
                            </g>
                          </svg>
                        </Link>
                      </div>
                    </Cell>
                  </Grid>
                </Cell>

                <Cell className="ridicule" col={6}>
                  <div
                    className="mobile_pics animate fadeIn animated"
                    data-animate="fadeIn"
                    data-duration="0.8s"
                    style={{
                      animationDuration: "0.8s",
                      visibility: "visible",
                    }}
                  >
                    <img src={homebanner2} alt="Home Banner" />
                  </div>
                </Cell>
              </Grid>
            </div>
          </div>
          <div className="sixthrow">
            <div className="wrapss">
              <div className="closefooter">
                <h3>Start your business journey with us</h3>
                <p>
                  Try us for free, and explore all the tools and services you
                  need to start, run, and grow your business.{" "}
                </p>
                <div className="spring">
                  <center>
                    <nav className="smaller">
                      <Link
                        to="/auth/signup"
                        style={{ color: "#fff !important" }}
                      >
                        <ul>
                          <div style={{ width: "100% !important" }}>
                            <li>
                              Start free trial
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </li>
                          </div>
                        </ul>
                      </Link>
                    </nav>
                  </center>
                </div>
              </div>
            </div>
          </div>

          <div className="footer">
            <br></br>
            <Foot />
          </div>
        </div>
      </>
    );
  }
}
document.title = "Swip | Store with us and increase profits";

export default Home;
