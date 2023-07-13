import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";

function Singup() {
  return (
    <div>
      <Meta title={"Singup"} />
      <BreadCrumb title="Singup" />
      <div className="login-wrapper py-5  home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Singup</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="name"
                      name="name"
                      placeholder="Enter your name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
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
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button border-0">Singup</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singup;
