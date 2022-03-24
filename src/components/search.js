import React, { Component } from "react";

import Foot from "./footer";
import Nav from "./nav";
import instance from "../authaxios";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searcher: false,
      val: "",
      loading: false,
      results: [],
    };
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  async search() {
    if (this.state.val !== "") {
      this.setState({ loading: true });

      try {
        let res = await instance.post("/globalsearch", {
          val: this.state.val,
        });

        const results = await res.data;
        this.setState({ results });
        this.setState({ loading: false });
        this.setState({ searcher: true });
        this.refresh();
      } catch (e) {
        console.log(e);
      }
    }
  }
  render() {
    const { loading, searcher } = this.state;
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
                <form onSubmit={this.handleSubmit}>
                  <div className="global-search">
                    <div class="wrapk">
                      <div class="search">
                        <input
                          type="text"
                          name="val"
                          onChange={this.handleChange}
                          class="searchTerm"
                          placeholder="Search for products and stores"
                        />
                        <button
                          disabled={this.state.loading}
                          type="submit"
                          onClick={() => this.search()}
                          class="searchButton"
                        >
                          {loading && (
                            <FontAwesomeIcon
                              style={{ position: "relative", top: "0px" }}
                              icon={faSpinner}
                              spin
                            />
                          )}
                          {!loading && <i class="fa fa-search"></i>}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="answers">
                    {loading && (
                      <>
                        {" "}
                        <center>
                          <p>Searching for '{this.state.val}'</p>
                          <br></br>
                          <FontAwesomeIcon
                            style={{
                              position: "relative",
                              fontSize: "40px",
                              top: "0px",
                            }}
                            icon={faSpinner}
                            spin
                          />
                        </center>
                      </>
                    )}
                    <div className="columns">
                      {searcher &&
                        this.state.results.map((result) => (
                          <>
                            <div className="column">
                              <div className="pproducts">
                                <div className="ppmedia">
                                  <div className="file-wrapper">
                                    <img
                                      className="img-wrapper"
                                      src={"" + result.image_link}
                                      alt="products"
                                    />
                                  </div>
                                </div>
                                <div className="ppdata">
                                  <div className="header">
                                    <div className="left price">
                                      {(result.p_id, result.p_title)}
                                    </div>
                                  </div>
                                  <div className="kudi">
                                    <div className="left price">
                                      NGN
                                      {result.p_price
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                    </div>
                                    <div className="left  compareprice">
                                      Location:{result.store_state}
                                    </div>
                                  </div>
                                  <div>
                                    <center>
                                      <a
                                        target="__blank"
                                        style={{
                                          textDecoration: "underline",
                                          color: "blue",
                                        }}
                                        href={
                                          "https://" +
                                          result.store_username +
                                          ".swip.ng"
                                        }
                                      >
                                        View on Seller Site
                                      </a>
                                    </center>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        ))}
                    </div>
                  </div>
                </form>
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
document.title = "Search available stores | Store with us and increase profits";

export default Home;
