import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import Button from "../../../dashboard/Formbuttons";
import Error from "../../../dashboard/errmessage";
import "./../../../assets/scss/style.scss";
import UserStore from "../../../UserStore";
import { InputGroup, FormControl } from "react-bootstrap";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import instance from "../../../authaxios";

class SignUp1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      phone: null,
      email: null,
      place: null,
      loading: false,
      next: "home",
      verify: "",
      code: "",
      retry: false,
      error: false,
      errmsg: null,
      isLoggedIn: false,
      formErrors: {
        username: "",
        email: "",
        password: "",
        phone: "",
      },
    };
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleChange1 = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({
      [name]: value.replace(/[.,#!$%^&@ 0-9+*;:{}=\-_`~()]/g, "").toLowerCase(),
    });
  };
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "username":
        formErrors.username =
          value.length < 3 && value.length > 0
            ? "Username must be morethan 3 values"
            : "";
        break;
      case "phone":
        formErrors.phone =
          value.length < 10 && value.length > 0
            ? "Please enter a valid phone number"
            : "";
        break;
      case "email":
        formErrors.email =
          value.length < 7 && value.length > 0
            ? "Please enter a valid name"
            : "";
        break;
      case "password":
        formErrors.password =
          value.length < 7 && value.length > 0
            ? "Minimum of 8 characters Required"
            : "";
        break;
      case "code":
        formErrors.password =
          value.length < 5 && value.length > 0 ? "Minimum of 6 numbers" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };
  async retry() {
    this.setState({ retry: true });
    try {
      let res = await instance.post("/verifyphone", {
        phone: this.state.phone,
        verify: this.state.verify,
      });

      let result = await res.data;

      if (result && result.success) {
        this.setState({ loading: false, next: "verify" });
        this.setState({ retry: false });
      } else if (result && result.success === false) {
        this.setState({ loading: false });
        this.setState({ errmsg: result.msg });
        this.setState({ error: true });
      }
    } catch (e) {
      console.log(e);
    }
  }
  async verifyAccount() {
    this.setState({ loading: true });
    if (
      this.state.formErrors.username === "" &&
      this.state.formErrors.email === "" &&
      this.state.formErrors.password === "" &&
      this.state.formErrors.phone === "" &&
      this.state.username !== null &&
      this.state.email !== null &&
      this.state.phone !== null &&
      this.state.place !== null &&
      this.state.password !== null
    ) {
      if (this.state.verify === "") {
        this.state.verify = Math.floor(100000 + Math.random() * 900000);
      }
      try {
        let res = await instance.post("/verifyphone", {
          phone: this.state.phone,
          verify: this.state.verify,
        });

        let result = await res.data;

        if (result && result.success) {
          this.setState({ loading: false, next: "verify" });
        } else if (result && result.success === false) {
          this.setState({ loading: false });
          this.setState({ errmsg: result.msg });
          this.setState({ error: true });
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      this.setState({ loading: false });
      this.setState({ errmsg: "Please Fill out your form Correctly" });
      this.setState({ error: true });
    }
  }
  async createAccount() {
    this.setState({ loading: true });
    if (parseInt(this.state.verify) === parseInt(this.state.code)) {
      try {
        let res = await instance.post("/createowners", {
          username: this.state.username,
          phone: this.state.phone,
          email: this.state.email,
          state: this.state.place,
          password: this.state.password,
        });

        let result = await res.data;

        if (result && result.success) {
          this.setState({ loading: false });
          UserStore.isLoggedIn = true;
          UserStore.owner_id = result.owner_id;
          UserStore.store_id = result.store_id;
          UserStore.username = result.username;
          localStorage.setItem("isLoggedin", "true");
          localStorage.setItem("owner_id", result.owner_id);
          localStorage.setItem("store_id", result.store_id);
          localStorage.setItem("username", result.username);
          localStorage.setItem("email", result.store_email);
          this.setState({ isLoggedIn: true });
          return <Redirect to="/dashboard" />;
        } else if (result && result.success === false) {
          this.setState({ loading: false });
          this.setState({ errmsg: result.msg });
          this.setState({ error: true });
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      this.setState({ loading: false });
      this.setState({ errmsg: "Invalid code supplied" });
      this.setState({ error: true });
    }
  }
  render() {
    const { formErrors } = this.state;
    const { loading } = this.state;
    const { retry } = this.state;
    const { error } = this.state;
    const { errmsg } = this.state;
    const { isLoggedIn } = this.state;
    if (isLoggedIn) {
      return <Redirect to="/dashboard" />;
    } else {
      if (this.state.next === "home") {
        return (
          <Aux>
            <Breadcrumb />
            <div className="auth-wrapper">
              <div className="auth-content">
                <div className="auth-bg">
                  <span className="r" />
                  <span className="r s" />
                  <span className="r s" />
                  <span className="r" />
                </div>
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mb-4">
                      <div className="loginlogo">
                        <a href="/">
                          <h2>SWIP</h2>
                        </a>
                      </div>
                      <div className="maincontent">
                        <p>
                          Try us for free, and explore all the tools and
                          services you need to start, run, and grow your
                          business.
                        </p>
                      </div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                      <h5 className="mb-4">Sign up</h5>
                      {error && <Error msg={errmsg} />}
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="username"
                          onChange={this.handleChange1}
                          placeholder="Store Username"
                          required
                        />
                      </div>
                      {formErrors.username.length > 0 && (
                        <span className="inputerror">
                          {formErrors.username}
                        </span>
                      )}
                      <InputGroup className="mb-3">
                        <FormControl
                          disabled="true"
                          placeholder="store Sub Domain URL"
                          aria-label="store Sub Domain URL"
                          value={this.state.username}
                          aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2">
                            .swip.ng
                          </InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                      <div className="input-group mb-3">
                        <input
                          type="number"
                          name="phone"
                          className="form-control"
                          placeholder="Phone Number"
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                      {formErrors.email.length > 0 && (
                        <span className="inputerror">{formErrors.phone}</span>
                      )}
                      <div className="input-group mb-3">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                      {formErrors.email.length > 0 && (
                        <span className="inputerror">{formErrors.email}</span>
                      )}
                      <div className="input-group mb-3">
                        <select
                          name="place"
                          onChange={this.handleChange}
                          className="form-control"
                        >
                          <option></option>
                          <option value="Abia">Abia</option>
                          <option value="Adamawa">Adamawa</option>
                          <option value="Akwa Ibom">Akwa Ibom</option>
                          <option value="Anambra">Anambra</option>
                          <option value="Bauchi">Bauchi</option>
                          <option value="Bayelsa">Bayelsa</option>
                          <option value="Benue">Benue</option>
                          <option value="Borno">Borno</option>
                          <option value="Cross Rive">Cross River</option>
                          <option value="Delta">Delta</option>
                          <option value="Ebonyi">Ebonyi</option>
                          <option value="Edo">Edo</option>
                          <option value="Ekiti">Ekiti</option>
                          <option value="Enugu">Enugu</option>
                          <option value="FCT">Federal Capital Territory</option>
                          <option value="Gombe">Gombe</option>
                          <option value="Imo">Imo</option>
                          <option value="Jigawa">Jigawa</option>
                          <option value="Kaduna">Kaduna</option>
                          <option value="Kano">Kano</option>
                          <option value="Katsina">Katsina</option>
                          <option value="Kebbi">Kebbi</option>
                          <option value="Kogi">Kogi</option>
                          <option value="Kwara">Kwara</option>
                          <option value="Lagos">Lagos</option>
                          <option value="Nasarawa">Nasarawa</option>
                          <option value="Niger">Niger</option>
                          <option value="Ogun">Ogun</option>
                          <option value="Ondo">Ondo</option>
                          <option value="Osun">Osun</option>
                          <option value="Oyo">Oyo</option>
                          <option value="Plateau">Plateau</option>
                          <option value="Rivers">Rivers</option>
                          <option value="Sokoto">Sokoto</option>
                          <option value="Taraba">Taraba</option>
                          <option value="Yobe">Yobe</option>
                          <option value="Zamfara">Zamfara</option>
                        </select>
                      </div>
                      {formErrors.email.length > 0 && (
                        <span className="inputerror">{formErrors.email}</span>
                      )}
                      <div className="input-group mb-4">
                        <input
                          type="password"
                          name="password"
                          onChange={this.handleChange}
                          className="form-control"
                          placeholder="password"
                          required
                        />
                      </div>
                      {formErrors.password.length > 0 && (
                        <span className="inputerror">
                          {formErrors.password}
                        </span>
                      )}
                      <div className="form-group text-left">
                        <div>
                          <div class="page__toggle">
                            <label class="toggle">
                              <input class="toggle__input" type="checkbox" />
                              <span class="toggle__label">
                                <span class="toggle__text">
                                  {" "}
                                  By Signing up you agree to our{" "}
                                  <NavLink to="/terms"> terms </NavLink>
                                </span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <Button
                        onClick={() => this.verifyAccount()}
                        name={"singup"}
                        value={
                          <>
                            {loading && (
                              <FontAwesomeIcon
                                style={{ position: "relative", top: "-5px" }}
                                icon={faSpinner}
                                spin
                              />
                            )}{" "}
                            {!loading && <>Verify yourself</>}
                          </>
                        }
                        placeholder={"Enter your name"}
                      />
                      <p className="mb-0 text-muted">
                        Allready have an account?{" "}
                        <NavLink to="/auth/signin">Login</NavLink>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Aux>
        );
      } else {
        return (
          <Aux>
            <Breadcrumb />
            <div className="auth-wrapper">
              <div className="auth-content">
                <div className="auth-bg">
                  <span className="r" />
                  <span className="r s" />
                  <span className="r s" />
                  <span className="r" />
                </div>
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mb-4">
                      <div className="loginlogo">
                        <a href="/">
                          <h2>SWIP</h2>
                        </a>
                      </div>
                      <div className="maincontent">
                        <p>
                          Try us for free, and explore all the tools and
                          services you need to start, run, and grow your
                          business.
                        </p>
                      </div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                      <div className="maincontent">
                        <p>Enter the code sent to {this.state.phone}</p>
                      </div>
                      {error && <Error msg={errmsg} />}
                      <div className="input-group mb-4">
                        <input
                          type="number"
                          name="code"
                          onChange={this.handleChange}
                          className="form-control"
                          placeholder="Verification code"
                          required
                        />
                      </div>
                      <NavLink to="#" onClick={() => this.retry()}>
                        <>
                          {retry && (
                            <FontAwesomeIcon
                              style={{ position: "relative", top: "-5px" }}
                              icon={faSpinner}
                              spin
                            />
                          )}{" "}
                          {!retry && <>Resend Code</>}
                        </>
                      </NavLink>
                      {formErrors.username.length > 0 && (
                        <span className="inputerror">
                          {formErrors.username}
                        </span>
                      )}

                      <Button
                        onClick={() => this.createAccount()}
                        name={"signup"}
                        value={
                          <>
                            {loading && (
                              <FontAwesomeIcon
                                style={{ position: "relative", top: "-5px" }}
                                icon={faSpinner}
                                spin
                              />
                            )}{" "}
                            {!loading && <>Proceed</>}
                          </>
                        }
                        placeholder={"Enter your name"}
                      />
                      <p className="mb-0 text-muted"></p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Aux>
        );
      }
    }
  }
}

export default SignUp1;
