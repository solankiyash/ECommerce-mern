import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
import {IoIosArrowRoundBack} from "react-icons/io"

function SingleBlog() {
  return (
    <>
      <Meta title={"Dynamic blog name"} />
      <BreadCrumb title="Dynamic blog name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10"><IoIosArrowRoundBack className="fs-4"/>Go Back to Blogs</Link>
                <div className="title">
                  <h3>A beautiful sunday morning renaissance</h3>
                </div>
                <img
                  className="img-fluid w-100 my-4"
                  src="images/blog-1.jpg"
                  alt="blog"
                />
                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium minus adipisci ipsum corporis veniam neque ex odio
                  perspiciati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
