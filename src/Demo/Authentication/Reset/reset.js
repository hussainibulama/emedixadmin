import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../dashboard/Formbuttons";
import Error from "../../../dashboard/errmessage";
import Good from "../../../dashboard/goodmessage";
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
      email: null,
      loading: false,
      error: false,
      good: false,
      errmsg: null,

      formErrors: {
        email: "",
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
      case "email":
        formErrors.email =
          value.length < 7 && value.length > 0
            ? "Please enter a valid Email Address"
            : "";
        break;

      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };
  async Login() {
    this.setState({ loading: true });
    if (this.state.formErrors.email === "" && this.state.email !== null) {
      try {
        let res = await instance.post("/resetpassword", {
          email: this.state.email,
        });

        let result = await res.data;

        if (result && result.success) {
          this.setState({ loading: false });
          this.setState({ errmsg: result.msg });
          this.setState({ error: false });
          this.setState({ good: true });
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
      this.setState({ errmsg: "Please Fill out your form Correctly" });
      this.setState({ error: true });
    }
  }
  render() {
    const { formErrors } = this.state;
    const { loading } = this.state;
    const { error, good } = this.state;
    const { errmsg } = this.state;

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
                    <p>Continue to your store</p>
                  </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <h3 className="mb-4">Reset Password</h3>
                  {good && <Good msg={errmsg} />}
                  {error && <Error msg={errmsg} />}
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      name="email"
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                  {formErrors.email.length > 0 && (
                    <span className="inputerror">{formErrors.email}</span>
                  )}

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
                        {!loading && <>Reset Password</>}
                      </>
                    }
                  />

                  <p className="mb-0 text-muted">
                    Know your password?{" "}
                    <NavLink to="/auth/signup">Sign in</NavLink>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default SignUp1;
