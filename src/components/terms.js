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
                  <h1 className="pricker">Terms of Service</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="secondrow">
            <div className="">
              <div>
                <section className="section backg">
                  <div className="wrapss">
                    <div className="page-width">
                      <p>Last updated on: April 1, 2021</p>
                      <p>
                        {" "}
                        By signing up for a Swip Account (as defined in Section
                        1) or by using any Swip Services (as defined below), you
                        are agreeing to be bound by the following terms and
                        conditions (the “Terms of Service”). As used in these
                        Terms of Service, “we”, “us” and “Swip” means the
                        applicable Swip Contracting Party (as defined in Section
                        4 below). The services offered by Swip under the Terms
                        of Service include various products and services to help
                        you sell goods and services to buyers, whether online
                        (“Online Services”) by enabling you to create and build
                        your own online store, in person (“POS Services”), or
                        both. Any such services offered by Swip are referred to
                        in these Terms of Services as the “Services”. Any new
                        features or tools which are added to the current
                        Services shall be also subject to the Terms of Service.
                        Please read the Terms of Service, including any document
                        referred to in these Terms of Service, for the complete
                        picture of your legal requirements. By using Swip or any
                        Swip services, you are agreeing to these terms. Be sure
                        to occasionally check back for updates.
                      </p>
                    </div>
                  </div>
                </section>
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
                            <li>Content</li>
                            <li>Intellectual Property</li>
                            <li>Subscription</li>
                            <li>Termination</li>
                            <li>Refund</li>
                            <li>Rights of Third Parties</li>
                            <li>Feedback and Reviews</li>
                            <li>Privacy & Data Protection</li>
                          </div>
                        </Cell>
                        <Cell col={8}>
                          <h1>Introduction</h1>
                          <p>
                            By signing up for a Swip Account (as defined in
                            Section 1) or by using any Swip Services (as defined
                            below), you are agreeing to be bound by the
                            following terms and conditions (the “Terms of
                            Service”). As used in these Terms of Service, “we”,
                            “us” and “Swip” means the applicable Swip
                            Contracting Party (as defined in Section 4 below).
                            The services offered by Swip under the Terms of
                            Service include various products and services to
                            help you sell goods and services to buyers, whether
                            online (“Online Services”) by enabling you to create
                            and build your own online store, in person (“POS
                            Services”), or both. Any such services offered by
                            Swip are referred to in these Terms of Services as
                            the “Services”. Any new features or tools which are
                            added to the current Services shall be also subject
                            to the Terms of Service.
                          </p>
                          <h1>Content</h1>
                          <p>
                            By uploading Materials, you agree: (a) to allow
                            other internet users to view the Materials you post
                            publicly to your Store; (b) to allow Swip to store,
                            and in the case of Materials you post publicly,
                            display and use your Materials; and (c) that Swip
                            can, at any time, review and delete all the
                            Materials submitted to its Service, although Swip is
                            not obligated to do so. You retain ownership over
                            all Materials that you upload to the Store; however,
                            by making your Store public, you agree to allow
                            others to view Materials that you post publicly to
                            your Store. You are responsible for compliance of
                            the Materials with any applicable laws or
                            regulations. Swip shall have the non-exclusive right
                            and license to use the names, trademarks, service
                            marks and logos associated with your Store to
                            promote the Service.
                          </p>
                          <h1>Intellectual Property</h1>
                          <p>
                            We do not claim any intellectual property rights
                            over the Materials you provide to the Swip Service.
                            All Materials you upload to your Swip Store remains
                            yours. You can remove your Swip Store at any time by
                            deleting your Account.
                          </p>
                          <h1>Subscription</h1>
                          <p>
                            You will pay the Fees applicable to your
                            subscription to Online Service and/or POS Services
                            (“Subscription Fees”) and any other applicable fees,
                            including but not limited to applicable fees
                            relating to the value of sales made through your
                            Store when using all payment providers other than
                            Swip Payments (“Transaction Fees”), and any fees
                            relating to your purchase or use of any products or
                            services such as Swip Payments, POS Equipment,
                            shipping, apps, Themes, domain names, Experts
                            Marketplace, or Third Party Services (“Additional
                            Fees”). Together, the Subscription Fees, Transaction
                            Fees and the Additional Fees are referred to as the
                            “Fees”.
                          </p>
                          <h1>Termination</h1>
                          <p>
                            You can choose to cancel your Swip account at any
                            time. Once your Swip account has been canceled, we
                            would cancel all your Swip services. However, we
                            have no responsibility for either the permanent
                            removal of your content nor for providing you with
                            access to your content once your Swip account has
                            been canceled. You should take steps to backup your
                            content before cancellation. If you are a paid user
                            of Swip services and you cancel our services,
                            previous charges will not be refunded.
                          </p>
                          <h1>Refund</h1>
                          <p>
                            {" "}
                            Swip is not responsible for refunds if the service
                            has not been used. When a Swip account is canceled
                            or deleted, the previous charges will not be
                            refunded, but you would continue to use the service
                            until the end of the term in which you already paid
                            for.
                          </p>

                          <h1>Rights of Third Parties</h1>
                          <p>
                            Save for Swip and its affiliates, Swip Users or
                            anyone accessing Swip Services pursuant to these
                            Terms of Service, unless otherwise provided in these
                            Terms of Service, no person or entity who is not a
                            party to these Terms of Service shall have any right
                            to enforce any term of these Terms of Service,
                            regardless of whether such person or entity has been
                            identified by name, as a member of a class or as
                            answering a particular description. For the
                            avoidance of doubt, this shall not affect the rights
                            of any permitted assignee or transferee of these
                            Terms.
                          </p>
                          <h1>Feedback and Reviews</h1>
                          <p>
                            Swip welcomes any ideas and/or suggestions regarding
                            improvements or additions to the Services. Under no
                            circumstances shall any disclosure of any idea,
                            suggestion or related material or any review of the
                            Services, Third Party Services or any Third Party
                            Provider (collectively, “Feedback") to Swip be
                            subject to any obligation of confidentiality or
                            expectation of compensation. By submitting Feedback
                            to Swip (whether submitted directly to Swip or
                            posted on any Swip hosted forum or page), you waive
                            any and all rights in the Feedback and that Swip is
                            free to implement and use the Feedback if desired,
                            as provided by you or as modified by Swip, without
                            obtaining permission or license from you or from any
                            third party. Any reviews of a Third Party Service or
                            Third Party Provider that you submit to Swip must be
                            accurate to the best of your knowledge, and must not
                            be illegal, obscene, threatening, defamatory,
                            invasive of privacy, infringing of intellectual
                            property rights, or otherwise injurious to third
                            parties or objectionable. Swip reserves the right
                            (but not the obligation) to remove or edit Feedback
                            of Third Party Services or Third Party Providers,
                            but does not regularly inspect posted Feedback
                          </p>
                          <h1>Privacy & Data Protection</h1>
                          <p>
                            Swip is firmly committed to protecting the privacy
                            of your personal information and the personal
                            information of your customers. By using the Service,
                            you acknowledge and agree that Swip’s collection,
                            usage and disclosure of this personal information is
                            governed by our Privacy Policy. Additionally, if:
                            (a) you are established in the European Economic
                            Area (EEA); (b) you provide goods or services to
                            customers in the EEA; or (c) you are otherwise
                            subject to the requirements of the EU General Data
                            Protection Regulation, Swip’s collection and use of
                            personal information of any European residents is
                            also subject to our Data Processing Addendum.
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
