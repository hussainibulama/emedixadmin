import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import Foot from "./footer";
import Nav from "./nav";
class Home extends Component {
  render() {
    return (
      <>
        <div className="home">
          <div className="wrapperss">
            <div className="navi">
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
                <div className="pricker">
                  <h1 className="pricker">Privacy Policy</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="secondrow">
            <div className="">
              <div>
                <section className="section">
                  <div className="wrapss">
                    <div className="page-width">
                      <Grid>
                        <Cell col={4}>
                          <div className="tableof">
                            <h1>Table of Content</h1>
                            <li>Introduction</li>
                            <li>Our values</li>
                            <li>Why we process your information </li>
                            <li>Your rights over your information</li>
                            <li>How we protect your information</li>
                            <li>
                              How we use “cookies” and other tracking
                              technologies
                            </li>
                            <li>How you can reach us </li>
                          </div>
                        </Cell>
                        <Cell col={8}>
                          <h1>Introduction</h1>
                          <p>
                            In our mission to make commerce better for everyone
                            at Swip, we collect and use information about you,
                            our
                            <li>merchants using Swip to power your business</li>
                            <li>
                              customers who shop at a Swip-powered business
                            </li>
                            <li>
                              partners who develop apps for merchants to use,
                              build stores on behalf of merchants, refer
                              potential entrepreneurs to Swip, or otherwise help
                              merchants operate or improve their Swip-powered
                              business
                            </li>
                            <li>
                              users of Swip apps and services like Shop or Shop
                              Pay
                            </li>
                            <li>
                              visitors to Swip’s websites, or anyone contacting
                              Swip support
                            </li>
                            This Privacy Policy will help you better understand
                            how we collect, use, and share your personal
                            information. If we change our privacy practices, we
                            may update this privacy policy. If any changes are
                            significant, we will let you know (for example,
                            through the Swip admin or by email).
                          </p>
                          <h1>Our values</h1>
                          <p>
                            Trust is the foundation of the Swip platform and
                            includes trusting us to do the right thing with your
                            information. Three main values guide us as we
                            develop our products and services. These values
                            should help you better understand how we think about
                            your information and privacy.
                            <li>Your information belongs to you</li>
                            <li>We protect your information from others</li>
                            <li>
                              We help merchants and partners meet their privacy
                              obligations
                            </li>
                          </p>
                          <h1>Why we process your information </h1>
                          <p>
                            We generally process your information when we need
                            to do so to fulfill a contractual obligation (for
                            example, to process your subscription payments to
                            use the Swip platform), or where we or someone we
                            work with needs to use your personal information for
                            a reason related to their business (for example, to
                            provide you with a service). European law calls
                            these reasons “legitimate interests.” These
                            “legitimate interests” include:
                            <li>preventing risk and fraud</li>
                            <li>
                              answering questions or providing other types of
                              support
                            </li>
                            <li>
                              helping merchants find and use apps through our
                              app store
                            </li>
                            <li>
                              providing and improving our products and services
                            </li>
                            <li>providing reporting and analytics</li>
                            <li>testing out features or additional services</li>
                            <li>
                              assisting with marketing, advertising, or other
                              communications
                            </li>
                            We only process personal information for these
                            “legitimate interests” after considering the
                            potential risks to your privacy—for example, by
                            providing clear transparency into our privacy
                            practices, offering you control over your personal
                            information where appropriate, limiting the
                            information we keep, limiting what we do with your
                            information, who we send your information to, how
                            long we keep your information, or the technical
                            measures we use to protect your information.
                            <br></br>
                            One of the ways in which we are able to help
                            merchants using Swip is by using techniques like
                            “machine learning” (European law refers to this as
                            “automated decision-making”) to help us improve our
                            services. When we use machine learning, we either:
                            (1) still have a human being involved in the process
                            (and so are not fully automated); or (2) use machine
                            learning in ways that don’t have significant privacy
                            implications (for example, reordering how apps might
                            appear when you visit the app store).
                          </p>
                          <h1>Your rights over your information</h1>
                          <p>
                            We believe you should be able to access and control
                            your personal information no matter where you live.
                            Depending on how you use Swip, you may have the
                            right to request access to, correct, amend, delete,
                            port to another service provider, restrict, or
                            object to certain uses of your personal information
                            (for example, direct marketing). <br></br>We will
                            not charge you more or provide you with a different
                            level of service if you exercise any of these
                            rights. If you buy something from a Swip-powered
                            store and wish to exercise these rights over
                            information about your purchase, you need to
                            directly contact the merchant you interacted with.
                            <br></br> We are only a processor on their behalf,
                            and cannot decide how to process their information.
                            As such, we can only forward your request to them to
                            allow them to respond. We will of course help our
                            merchants to fulfill these requests by giving them
                            the tools to do so and by answering their questions.{" "}
                            <br></br>Please note that if you send us a request
                            relating to your personal information, we have to
                            make sure that it is you before we can respond. In
                            order to do so, we may ask to see documentation
                            verifying your identity, which we will discard after
                            verification. <br></br>If you would like to
                            designate an authorized agent to exercise your
                            rights for you, please email us from the email
                            address we have on file for you. If you email us
                            from a different email address, we cannot determine
                            if the request is coming from you and will not be
                            able to accommodate your request. <br></br>In your
                            email, please include the name and email address of
                            your authorized agent. If you are not happy with our
                            response to a request, you can contact us to resolve
                            the issue. You also have the right to contact your
                            local data protection or privacy authority at any
                            time. Finally, because there is no common
                            understanding about what a “Do Not Track” signal is
                            supposed to mean, we don’t respond to those signals
                            in any particular way.
                          </p>
                          <h1>How we protect your information </h1>
                          <p>
                            Our teams work tirelessly to protect your
                            information, and to ensure the security and
                            integrity of our platform. We also have independent
                            auditors assess the security of our data storage and
                            systems that process financial information. However,
                            we all know that no method of transmission over the
                            Internet, and method of electronic storage, can be
                            100% secure. This means we cannot guarantee the
                            absolute security of your personal information.
                          </p>
                          <h1>
                            How we use “cookies” and other tracking technologies{" "}
                          </h1>
                          <p>
                            {" "}
                            We use cookies and similar tracking technologies on
                            our website and when providing our services. For
                            more information about how we use these
                            technologies, including a list of other companies
                            that place cookies on our sites, a list of cookies
                            that we place when we power a merchant’s store, and
                            an explanation of how you can opt out of certain
                            types of cookies, please see our Cookie Policy.
                          </p>

                          <h1>How you can reach us </h1>
                          <p>
                            If you would like to ask about, make a request
                            relating to, or complain about how we process your
                            personal information, you can contact us by email at
                            privacy [at] swip.ng, or at one of the addresses
                            below. If you would like to submit a legally binding
                            request to demand someone else’s personal
                            information (for example, if you have a subpoena or
                            court order), please review our Guidelines for Legal
                            Requests.
                          </p>
                        </Cell>
                      </Grid>
                    </div>
                  </div>
                </section>
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
