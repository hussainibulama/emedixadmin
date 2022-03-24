import React, { Component } from "react";
import Foot from "./footer";
import Nav from "./nav";
import background from "../images/background.png";
import { Grid, Cell } from "react-mdl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faMapPin,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
class Contact extends Component {
  render() {
    return (
      <>
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
                          textTransform: "lowercase",
                          fontWeight: "400 !important",
                        }}
                      >
                        Feel free to talk with us
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
                        you too can start builidng the future with us
                      </p>

                      <nav className="smaller">
                        <ul>
                          <li>
                            Get Quick Reply
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </li>
                        </ul>
                      </nav>
                    </span>
                  </Cell>
                </Grid>
              </div>
            </div>
          </div>
        </div>
        <div className="whoarewe">
          <div className="wrap">
            <div className="contactus">
              <div
                className="animate fadeIn animated"
                data-animate="fadeIn"
                style={{ visibility: "visible", textAlign: "left !important" }}
              >
                <div
                  class="contact_hdng"
                  style={{ textAlign: "left !important" }}
                >
                  <h2>Contact Information</h2>
                </div>
              </div>
              <div className="who_outer conti" style={{ position: "relative" }}>
                <div className="row">
                  <div
                    className="col-lg-4 col-sm-6 animate fadeInUp animated"
                    data-animate="fadeInUp"
                    data-duration="0.5s"
                    style={{ animationDuration: "0.5s", visibility: "visible" }}
                  >
                    <div className="box_item ">
                      <div className="who_icon">
                        <FontAwesomeIcon
                          style={{
                            position: "relative",
                            color: "#1aa3ff",
                            fontSize: "30px",
                            fontWeight: "bold",
                            top: "0em",
                          }}
                          icon={faMapPin}
                        />
                      </div>
                      <div className="who_text">
                        <h2> Address </h2>
                        <br></br>
                        <p
                          style={{
                            position: "relative",
                            fontSize: "16px",
                            color: "#889ab4",
                            marginTop: "-2em",
                            fontFamily: "inherit",
                          }}
                        >
                          No 25 behind Jaiz Bank, opposite Zenith Bank, 1st
                          Avenue Gwarinpa, Abuja, Nigeria
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-sm-6 animate fadeInUp animated"
                    data-animate="fadeInUp"
                    data-duration="0.5s"
                    style={{ animationDuration: "0.5s", visibility: "visible" }}
                  >
                    <div className="box_item ">
                      <div className="who_icon">
                        <FontAwesomeIcon
                          style={{
                            position: "relative",
                            color: "#ff471a",
                            fontSize: "30px",
                            fontWeight: "bold",
                            top: "0.2em",
                          }}
                          icon={faPhoneAlt}
                        />
                      </div>
                      <div className="who_text">
                        <h2> Phone</h2>
                        <br></br>
                        <p
                          style={{
                            position: "relative",
                            fontSize: "16px",
                            color: "#889ab4",
                            marginTop: "-2em",
                          }}
                        >
                          +234 813 6668 344
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-sm-6 animate fadeInUp animated"
                    data-animate="fadeInUp"
                    data-duration="0.5s"
                    style={{ animationDuration: "0.5s", visibility: "visible" }}
                  >
                    <div className="box_item ">
                      <div className="who_icon">
                        <FontAwesomeIcon
                          style={{
                            position: "relative",
                            color: "#587498",
                            fontSize: "30px",
                            fontWeight: "bold",
                            top: "0.2em",
                          }}
                          icon={faEnvelope}
                        />
                      </div>
                      <div className="who_text">
                        <p>
                          <h2>Email</h2>
                          <br></br>
                          <p
                            style={{
                              position: "relative",
                              fontSize: "16px",
                              color: "#889ab4",
                              marginTop: "-2em",
                            }}
                          >
                            lightwebltd@gmail.com
                          </p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Foot />
      </>
    );
  }
}

export default Contact;
