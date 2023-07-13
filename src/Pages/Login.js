import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <div className="login-wrapper py-5  home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="form-control"
                  />
                </div>
                <div className="mt-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="form-control"
                  />
                </div>
                <div>
                  <Link to="/forgot-pass">Forgot Password?</Link>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button type="submit" className="button border-0">Login</button>
                    <Link to="/singup" className="button singup">Singup</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
