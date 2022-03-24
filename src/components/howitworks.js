import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { Link } from "react-router-dom";
import Foot from "./footer";
import signup from "../images/how/signup.png";
import dashboard from "../images/how/dashboard.png";
import domain from "../images/how/domain.png";
import product from "../images/how/product.png";
import customize from "../images/how/customize.png";
import bank from "../images/how/bank.png";
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
                <h3 style={{ color: "#212326" }}>A Step-by-Step Guide</h3>
                <p>How to Start an Online Store with Swip</p>
              </div>
              <div className="">
                <Grid className="how-grid">
                  <Cell col={12}>
                    <div className="how-description how-mobile">
                      <p>1. Create an Account</p>
                    </div>
                  </Cell>

                  <Cell col={6}>
                    <div className="image-how">
                      <img
                        src={signup}
                        style={{
                          position: "relative",
                        }}
                        alt="Home Banner"
                      />
                    </div>
                  </Cell>
                  <Cell col={6}>
                    <div className="how-description how-desktop">
                      <p>1. Create an Account</p>
                    </div>
                  </Cell>
                  <Cell col={12}>
                    <div className="how-description how-mobile">
                      <p>2. Visit your Dashboard</p>
                    </div>
                  </Cell>
                  <Cell col={6}>
                    <div className="how-description how-desktop">
                      <p>2. Visit your Dashboard</p>
                    </div>
                  </Cell>

                  <Cell col={6}>
                    <div className="image-how">
                      <img
                        src={dashboard}
                        style={{
                          position: "relative",
                        }}
                        alt="Home Banner"
                      />
                    </div>
                  </Cell>
                  <Cell col={12}>
                    <div className="how-description how-mobile">
                      <p>3. Add Products</p>
                    </div>
                  </Cell>

                  <Cell col={6}>
                    <div className="image-how">
                      <img
                        src={product}
                        style={{
                          position: "relative",
                        }}
                        alt="Home Banner"
                      />
                    </div>
                  </Cell>
                  <Cell col={6}>
                    <div className="how-description how-desktop">
                      <p>3. Add Products</p>
                    </div>
                  </Cell>
                  <Cell col={12}>
                    <div className="how-description how-mobile">
                      <p>4. Enter your Bank Details</p>
                    </div>
                  </Cell>
                  <Cell col={6}>
                    <div className="how-description how-desktop">
                      <p>4. Enter your Bank Details</p>
                    </div>
                  </Cell>

                  <Cell col={6}>
                    <div className="image-how">
                      <img
                        src={bank}
                        style={{
                          position: "relative",
                        }}
                        alt="Home Banner"
                      />
                    </div>
                  </Cell>
                  <Cell col={12}>
                    <div className="how-description how-mobile">
                      <p>5. Buy Custom Domain</p>
                    </div>
                  </Cell>
                  <Cell col={6}>
                    <div className="image-how">
                      <img
                        src={domain}
                        style={{
                          position: "relative",
                        }}
                        alt="Home Banner"
                      />
                    </div>
                  </Cell>
                  <Cell col={6}>
                    <div className="how-description how-desktop">
                      <p>5. Buy Custom Domain</p>
                    </div>
                  </Cell>
                  <Cell col={12}>
                    <div className="how-description how-mobile">
                      <p>6. Customize your store</p>
                    </div>
                  </Cell>
                  <Cell col={6}>
                    <div className="how-description how-desktop">
                      <p>6. Customize your store</p>
                    </div>
                  </Cell>

                  <Cell col={6}>
                    <div className="image-how">
                      <img
                        src={customize}
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
