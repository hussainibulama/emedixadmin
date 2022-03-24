import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { Link } from "react-router-dom";
import Foot from "./footer";
import Nav from "./nav";
class Home extends Component {
  render() {
    return (
      <>
        <div className="home">
          <div className="wrappersss">
            <div className="navi">
              <Nav />
            </div>
          </div>
          <div className="sixthrow">
            <div className="wrapss">
              <div className="closefooter">
                <h3 style={{ color: "#212326" }}>
                  Set up your store, pick a plan later
                </h3>
                <p>Try us for 30 days, no credit card required </p>
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
              <div className="">
                <Grid>
                  <Cell col={4}>
                    <div className="pricing-card">
                      <h2 className="pricing-header">Basic Swip</h2>
                      <p>
                        Best for new businesses or online businesses new to
                        in-person selling
                      </p>
                      <div className="monthly-content">
                        <span className="pricing-card__plan-price heading--1">
                          <span className="price">
                            <span classname="visuallyhidden">
                              <span>
                                {" "}
                                <sup>&#8358;</sup>
                              </span>
                              <span className="price-money">3999</span>
                            </span>
                          </span>
                          <span>
                            <span className="pricing-card__plan-billing-period">
                              <sup>/mo</sup>
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </Cell>
                  <Cell col={4}>
                    <div className="pricing-card">
                      <h2 className="pricing-header">Swip</h2>
                      <p>
                        {" "}
                        Best for growing business / businesses with 1 retail
                        store
                      </p>
                      <div className="monthly-content">
                        <span className="pricing-card__plan-price heading--1">
                          <span className="price">
                            <span classname="visuallyhidden">
                              <span>
                                {" "}
                                <sup>&#8358;</sup>
                              </span>
                              <span className="price-money">9999</span>
                            </span>
                          </span>
                          <span>
                            <span className="pricing-card__plan-billing-period">
                              <sup>/mo</sup>
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </Cell>
                  <Cell col={4}>
                    <div className="pricing-card">
                      <h2 className="pricing-header">Advanced Swip</h2>
                      <p>Best for growing businesses with 2+ retail stores</p>
                      <div className="monthly-content">
                        <span className="pricing-card__plan-price heading--1">
                          <span className="price">
                            <span classname="visuallyhidden">
                              <span>
                                {" "}
                                <sup>&#8358;</sup>
                              </span>
                              <span className="price-money">29999</span>
                            </span>
                          </span>
                          <span>
                            <span className="pricing-card__plan-billing-period">
                              <sup>/mo</sup>
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </Cell>
                </Grid>
              </div>
            </div>
          </div>
          <div className="sixthrow">
            <div style={{ background: "#f5f8fc", paddingTop: "2em" }}>
              <div className="wrapss">
                <div className="closefooter">
                  <h3 style={{ color: "#212326" }}>
                    Set up your store, pick a plan later
                  </h3>
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
