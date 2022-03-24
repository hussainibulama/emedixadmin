import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import { Footer, FooterSection, Grid, Cell } from "react-mdl";
class Foot extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="wrap">
            <Footer size="mega">
              <FooterSection type="middle" className="foot">
                <div className="linklister">
                  <Link className="footerlink" to="/">
                    About
                  </Link>
                  <Link className="footerlink" to="/">
                    Career
                  </Link>
                  <Link className="footerlink" to="/">
                    Blog
                  </Link>
                  <Link className="footerlink" to="/">
                    Sitemap
                  </Link>
                </div>

                <Grid>
                  <Cell col={2} className="linklist">
                    <div className="footer_mobile">
                      <h2 className="really">Legal</h2>
                      <a href="/privacy">Privary Policy</a>
                      <a href="/terms">Terms and Condition</a>
                      <a href="/privacy">Cookie</a>
                    </div>
                  </Cell>
                  <Cell col={2} className="linklist">
                    <div className="footer_mobile">
                      <h2 className="really">Products</h2>

                      <a href="./">E/Mobile Commerce </a>
                      <a href="./">Preorder</a>
                    </div>
                  </Cell>
                  <Cell col={2} className="linklist">
                    <div className="footer_mobile">
                      <h2 className="really">Resources</h2>
                      <a href="./">Secured Payment</a>
                    </div>
                  </Cell>
                  <Cell col={2} className="linklist">
                    <div className="footer_mobile">
                      <h2 className="really">Support</h2>

                      <a href="/">24/7 Support</a>
                    </div>
                  </Cell>

                  <Cell col={2} className="linklist">
                    <h2 className="really">Get in Touch</h2>
                    <div className="info_outers">
                      <div className="info_row d-flex">
                        <div className="info_icon">
                          <FontAwesomeIcon
                            style={{
                              position: "relative",
                              color: "#fff",
                              fontSize: "15px",
                              fontWeight: "bold",
                              top: "5px",
                            }}
                            icon={faMapPin}
                          />
                        </div>
                        <div className="info_text">
                          <p style={{ textAlign: "left" }}>
                            Suite ce 12 Apo Sparklight Mall, Abuja.
                          </p>
                        </div>
                      </div>
                      <div className="info_row d-flex">
                        <div className="info_icon">
                          <FontAwesomeIcon
                            style={{
                              position: "relative",
                              color: "#fff",
                              fontSize: "15px",
                              fontWeight: "bold",
                              top: "5px",
                            }}
                            icon={faEnvelope}
                          />
                        </div>
                        <div className="info_text">
                          <a href="mailto:hello@swip.ng">hello@swip.ng</a>
                        </div>
                      </div>
                      <div className="info_row d-flex">
                        <div className="info_icon">
                          <FontAwesomeIcon
                            style={{
                              position: "relative",
                              color: "#fff",
                              fontSize: "15px",
                              fontWeight: "bold",
                              top: "",
                            }}
                            icon={faPhoneAlt}
                          />
                        </div>
                        <div className="info_text">
                          <a href="tel:+2348136668344">+2348136668344</a>
                        </div>
                      </div>
                    </div>
                  </Cell>
                  <Cell col={2} className="linklist">
                    <div className="footer_mobile">
                      <h2 className="really">Social</h2>

                      <div className="ftr_social d-flex">
                        <a
                          href="https://twitter.com/lightwebltd"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          <FontAwesomeIcon
                            style={{
                              position: "relative",
                              color: "#fff",
                              fontSize: "25px",
                              fontWeight: "bold",
                              top: "",
                            }}
                            icon={faFacebook}
                          />
                        </a>

                        <a
                          href="https://twitter.com/lightwebltd"
                          style={{ position: "relative", left: "7px" }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          <FontAwesomeIcon
                            style={{
                              position: "relative",
                              color: "#fff",
                              fontSize: "25px",
                              fontWeight: "bold",
                              top: "",
                            }}
                            icon={faTwitter}
                          />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/lightweb-ltd-b913761b8/"
                          style={{ position: "relative", left: "14px" }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          <FontAwesomeIcon
                            style={{
                              position: "relative",
                              color: "#fff",
                              fontSize: "25px",
                              fontWeight: "bold",
                              top: "",
                            }}
                            icon={faLinkedin}
                          />
                        </a>
                        <a
                          href="https://www.instagram.com/lightwebltd/"
                          style={{ position: "relative", left: "21px" }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          <FontAwesomeIcon
                            style={{
                              position: "relative",
                              color: "#fff",
                              fontSize: "25px",
                              fontWeight: "bold",
                              top: "",
                            }}
                            icon={faInstagram}
                          />
                        </a>
                      </div>
                    </div>
                  </Cell>
                </Grid>
              </FooterSection>
              <FooterSection
                type="bottom"
                logo={
                  <div
                    style={{
                      color: "#fff",
                      fontFamily: "Google Sans Regular",
                    }}
                  >
                    Copyright &copy; 2021 Swip, Ltd.
                  </div>
                }
              ></FooterSection>
            </Footer>
          </div>
        </div>
      </>
    );
  }
}

export default Foot;
