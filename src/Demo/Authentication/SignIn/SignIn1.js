import React from "react";
import { Redirect } from "react-router-dom";
import Button from "../../../dashboard/Formbuttons";
import Error from "../../../dashboard/errmessage";
import "./../../../assets/scss/style.scss";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aux from "../../../hoc/_Aux";
import instance from "../../../authaxios";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

class SignUp1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      loading: false,
      error: false,
      errmsg: null,
      isLoggedIn: false,
      formErrors: {
        username: "",
        password: "",
      },
    };
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "username":
        formErrors.username =
          value.length < 3 && value.length > 0
            ? "Username can not be less than 3"
            : "";
        break;

      case "password":
        formErrors.password =
          value.length < 4 && value.length > 0
            ? "Minimum of 8 characters Required"
            : "";
        break;

      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };
  async Login() {
    this.setState({ loading: true });
    if (
      this.state.formErrors.username === "" &&
      this.state.formErrors.password === "" &&
      this.state.username !== null &&
      this.state.password !== null
    ) {
      try {
        let res = await instance.post("/loginowners", {
          username: this.state.username,
          password: this.state.password,
        });

        let result = await res.data;

        if (result && result.success) {
          this.setState({ loading: false });
          localStorage.setItem("isLoggedin", "true");
          localStorage.setItem("owner_id", result.owner_id);
          localStorage.setItem("store_id", result.store_id);
          localStorage.setItem("username", result.username);

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
      this.setState({ errmsg: "Please Fill out your form Correctly" });
      this.setState({ error: true });
    }
  }
  render() {
    const { formErrors } = this.state;
    const { loading } = this.state;
    const { error } = this.state;
    const { errmsg } = this.state;
    const { isLoggedIn } = this.state;
    if (isLoggedIn) {
      return <Redirect to="/dashboard" />;
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
                        <h2>e-medix</h2>
                      </a>
                    </div>
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <h5 className="mb-4">Login</h5>
                    {error && <Error msg={errmsg} />}
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Store username is your default username"
                        name="username"
                        required
                        onChange={this.handleChange}
                      />
                    </div>
                    {formErrors.username.length > 0 && (
                      <span className="inputerror">{formErrors.username}</span>
                    )}
                    <div className="input-group mb-4">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="password"
                        name="password"
                        required
                        onChange={this.handleChange}
                      />
                    </div>
                    {formErrors.password.length > 0 && (
                      <span className="inputerror">{formErrors.password}</span>
                    )}
                    <div className="form-group text-left">
                      <div>
                        <div class="page__toggle">
                          <label class="toggle">
                            <input class="toggle__input" type="checkbox" />
                            <span class="toggle__label">
                              <span class="toggle__text">Save credentials</span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={() => this.Login()}
                      name={"Login"}
                      value={
                        <>
                          {loading && (
                            <FontAwesomeIcon
                              style={{ position: "relative", top: "-5px" }}
                              icon={faSpinner}
                              spin
                            />
                          )}{" "}
                          {!loading && <>Log in</>}
                        </>
                      }
                    />
                    {/* <p className="mb-2 text-muted">
                      Forgot password?{" "}
                      <NavLink to="/auth/reset-password">Reset</NavLink>
                    </p>
                    <p className="mb-0 text-muted">
                      Don’t have an account?{" "}
                      <NavLink to="/auth/signup">Signup</NavLink>
                    </p> */}
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

export default SignUp1;
