import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
function ProductCard(props) {
  const {grid} = props
  let location = useLocation()
 
  return (
    <>
    <div className={`${location.pathname === "/store" ? `gr-${grid}` :"col-3"}`}>
      <Link  to="/product/:id" className="product-card position-relative mb-3">
        <div className="wishlist-icon position-absolute">
            <Link>
            <img src="images/wish.svg" alt="" />
            </Link>
        </div>
        <div className="product-image">
          <img src="images/watch.jpg" className="img-fluid" alt="Product-image" />
          <img src="images/images-w-1.jpeg" className="img-fluid" alt="" />
        </div>
        <div className="product-detailes">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            kids headphones bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value="3"
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`description ${grid === 12 ? "d-block":"d-none"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam mollitia possimus perferendis culpa fugiat ex ducimus.
          </p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link>
                <img src="images/add-cart.svg" alt="addcart" />
                </Link>
                <Link>
                <img src="images/view.svg" alt="view" />
                </Link>
                <Link>
                <img src="images/prodcompare.svg" alt="compare" />
                </Link>

            </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname === "/store" ? `gr-${grid}` :"col-3"}`}>
      <Link to="/product/" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link>
            <img src="images/wish.svg" alt="" />
            </Link>
        </div>
        <div className="product-image">
          <img src="images/watch.jpg" className="img-fluid" alt="Product-image" />
          <img src="images/images-w-1.jpeg" className="img-fluid" alt="" />
        </div>
        <div className="product-detailes">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            kids headphones bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value="3"
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`description ${grid === 12 ? "d-block":"d-none"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam mollitia possimus perferendis culpa fugiat ex ducimus.
          </p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link>
                <img src="images/add-cart.svg" alt="addcart" />
                </Link>
                <Link>
                <img src="images/view.svg" alt="view" />
                </Link>
                <Link>
                <img src="images/prodcompare.svg" alt="compare" />
                </Link>

            </div>
        </div>
      </Link>
    </div>
    </>
  );
}

export default ProductCard;
