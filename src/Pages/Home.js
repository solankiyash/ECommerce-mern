import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../Components/BlogCard";
import ProductCard from "../Components/ProductCard";
import SpecialProduct from "../Components/SpecialProduct";

function Home() {
  return (
    <div>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative ">
                <img
                  src="/images/main-banner-1.jpg"
                  alt="main banner"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>ipad S13</h5>
                  <p>From $999.00 or $41.62/mo</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="/images/catbanner-01.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SELE</h4>
                    <h5>ipad S13</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="/images/catbanner-02.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="/images/catbanner-03.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="/images/catbanner-04.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="home-wrapper-2 py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="servies d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-10">
                    <img src="images/service.png" alt="servies" />
                    <div>
                      <h6>Free Shipping</h6>
                      <p className="mb-0">from all orders over $5</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <img src="images/service-02.png" alt="service" />
                    <div>
                      <h6>Daily Surprise Offers</h6>
                      <p className="mb-0">Save upto 25% Off</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <img src="images/service-03.png" alt="service" />
                    <div>
                      <h6>Support 24/7</h6>
                      <p className="mb-0">Shop with an expert</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <img src="images/service-04.png" alt="service" />
                    <div>
                      <h6>Affordable Prices</h6>
                      <p className="mb-0">Get Factory Default Price</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <img src="images/service-05.png" alt="servies" />
                    <div>
                      <h6>Sequre Payments</h6>
                      <p className="mb-0">100% Protected Payment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Watch</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Watch</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/headphone.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard  />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img className="img-fluid" src="images/applewatch.jpeg" alt="" />
                 <div className="famous-content position-absolute">
                 <h5>Big Screen</h5>
                <h6>Smart Watch series</h6>
                <p>From $399or $16.62/mo. for 24 mo.*</p>
                 </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img className="img-fluid" src="images/tab3.jpg" alt="" />
                 <div className="famous-content position-absolute">
                 <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness</h6>
                <p className="text-dark">27-inch 5k</p>
                 </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img className="img-fluid" src="images/iphon.jpg" alt="" />
                 <div className="famous-content position-absolute">
                 <h5 className="text-dark">Smart Phone</h5>
                <h6 className="text-dark">SmartPhone iphone x</h6>
                <p className="text-dark">27-inch 5k</p>
                 </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img className="img-fluid" src="images/spekar.jpeg" alt="" />
                 <div className="famous-content position-absolute">
                 <h5 className="text-dark">Home Speaker</h5>
                <h6 className="text-dark">Room-filling sound</h6>
                
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row ">
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>

          </div>
        </div>
      </section>
      <section className="populer-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Populer Products</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper  card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25 ">
                    <img src="/images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25 ">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25 ">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25 ">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25 ">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25 ">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25 ">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
        
          </div>
          <div className="row">
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
