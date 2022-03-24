import React from "react";
import Button from "../../../dashboard/Formbuttons";
import Error from "../../../dashboard/errmessage";
import Good from "../../../dashboard/goodmessage";
import { NavLink } from "react-router-dom";
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
      username: "",
      mm: false,
      exist: "no",
      password: null,
      password1: null,
      loading: false,
      error: false,
      good: false,
      errmsg: null,
      formErrors: {
        password: "",
        password1: "",
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
      case "password":
        formErrors.password =
          value.length < 8 && value.length > 0
            ? "Minimum of 8 characters Required"
            : "";
        break;

      case "password1":
        formErrors.password1 =
          value.length < 8 && value.length > 0
            ? "Minimum of 8 characters Required"
            : "";
        break;

      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };
  async componentDidMount() {
    try {
      let res = await instance.post("/verifyresetpassword", {
        checkid: this.props.match.params.id,
      });
      let result = await res.data;
      if (result && result.success) {
        this.setState({ exist: "yes", username: result.username });
      } else if (result && result.success === false) {
        this.setState({ avail: "no" });
      }
    } catch (e) {
      console.log(e);
    }
  }
  async Login() {
    this.setState({ loading: true });
    if (
      this.state.formErrors.password === "" &&
      this.state.formErrors.password1 === "" &&
      this.state.password !== null &&
      this.state.password1 !== null &&
      this.state.password === this.state.password1
    ) {
      try {
        let res = await instance.post("/changepassword", {
          username: this.state.username,
          password: this.state.password,
        });

        let result = await res.data;

        if (result && result.success) {
          this.setState({ loading: false });

          this.setState({ errmsg: result.msg });
          this.setState({ error: false });
          this.setState({ good: true, mm: true });
        } else if (result && result.success === false) {
          this.setState({ loading: false });
          this.setState({ errmsg: result.msg });
          this.setState({ error: true });
          this.setState({ good: false });
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      this.setState({ loading: false });
      this.setState({
        errmsg:
          "Password and Confirmation must match /  Fill out your form Correctly",
      });
      this.setState({ error: true });
    }
  }
  render() {
    const { formErrors } = this.state;
    const { loading } = this.state;
    const { error, good } = this.state;
    const { errmsg } = this.state;
    if (this.state.exist === "yes") {
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
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <h3 className="mb-4">Change Password</h3>
                    {good && <Good msg={errmsg} />}
                    {error && <Error msg={errmsg} />}
                    <div className="input-group mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="New Password"
                        name="password"
                        disabled={this.state.mm}
                        required
                        onChange={this.handleChange}
                      />
                    </div>
                    {formErrors.password.length > 0 && (
                      <span className="inputerror">{formErrors.password}</span>
                    )}
                    <div className="input-group mb-4">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm New Password"
                        name="password1"
                        disabled={this.state.mm}
                        required
                        onChange={this.handleChange}
                      />
                    </div>
                    {formErrors.password1.length > 0 && (
                      <span className="inputerror">{formErrors.password1}</span>
                    )}

                    <Button
                      onClick={() => this.Login()}
                      name={"Login"}
                      disabled={this.state.mm}
                      value={
                        <>
                          {loading && (
                            <FontAwesomeIcon
                              style={{ position: "relative", top: "-5px" }}
                              icon={faSpinner}
                              spin
                            />
                          )}{" "}
                          {!loading && <>Change Password</>}
                        </>
                      }
                    />
                    <p className="mb-0 text-muted">
                      Please <NavLink to="/auth/signin">Sign in</NavLink>
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
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <h3>Invalid Link</h3>
                    <NavLink to="/">Home page</NavLink>
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
