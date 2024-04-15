import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "./Assets/logo.jpg";
import React from "react";

function Navbar({ onLoginClick, handleInputChange, query, setShow }) {
  return (
    <>
      <nav>
        <a href="index.html">
          {/* <svg
            id="organic-logo"
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.953 49.469C27.8 48.624 24.457 48 20.75 48C17.687 48 14.832 48.287 12.348 48.831C10.342 42.863 4.695 39 0 39C-8.282 39-15 45.716-15 54s6.718 15 15 15c3.717 0 7.018-1.416 9.558-3.65C10.53 64.714 15.692 69 20.75 69c5.93 0 11.5-3.427 14.557-9.406C36.488 57.448 34.387 55 30.953 49.469Z"
              fill="#62B76C"
            />
            <path
              d="M69.5 96c0-13.306-10.583-24.144-23.674-24.836C49.41 70.636 46.93 70.5 44.5 70.5c-4.119 0-8.157.453-11.959 1.287C32.132 60.452 39.37 57 47 57c6.1 0 11.557 2.607 15.353 6.794C68.158 67.119 71 71.705 71 77.197V93h4V96z"
              fill="#68DBFF"
            />
            <path
              d="M50 39c-4.085 0-7.79.991-10.899 2.656C38.06 42.666 39.498 42 41 42c2.259 0 4.117 1.451 4.454 3.356C46.426 45.947 45.501 45 44 45c-1.103 0-2 .896-2 2s.897 2 2 2c1.103 0 2-.896 2-2 0-.269-.074-.516-.18-.753.967.097 1.887.329 2.744.694C49.438 49.709 50.914 50 52.5 50c3.526 0 6.595-2.08 8.013-5.071C60.157 44.574 55.781 39 50 39Z"
              fill="#FF7917"
            />
          </svg> */}
          <img src={logo} alt="orgFoodImg" className="logo" />
        </a>

        <div className="search-bar-container">
          <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input
              placeholder="Search"
              className="search-input"
              type="text"
              onChange={handleInputChange}
              value={query}
            />
          </div>
          <div></div>
        </div>
        <div>
          <ul id="navbar">
            <li>
              <Link to="/home" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            {/* <li>
              <Link to="/cart">Cart</Link>
            </li> */}
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/loginDialog">Login</Link>
            </li>
            {/* <button className="cart-button" id="cart-icon" onClick={toggleCart}>
              Toggle Cart
            </button> */}
          </ul>
        </div>
      </nav>
      {/* <div className={`cart ${cartActive ? "active" : ""}`}>
        <h2 className="cart-title">Your Cart</h2>
        <div className="cart-content">
          {itemsAdded.map((item, index) => (
            <div key={index} className="cart-box">
              <img src={item.imgSrc} alt="" className="cart-img" />
              <div className="detail-box">
                <div className="cart-product-title">{item.title}</div>
                <div className="cart-price">${item.price.toFixed(2)}</div>
                <input
                  type="number"
                  value="1"
                  className="cart-quantity"
                  onChange={(e) =>
                    handleCartItemQuantityChange(item.title, e.target.value)
                  }
                />
              </div>
              <button
                className="remove-button"
                onClick={() => handleRemoveCartItem(item.title)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="total">
          <div className="total-title">Total</div>
          <div className="total-price">${totalPrice.toFixed(2)}</div>
        </div>
        <button type="button" className="btn-buy" onClick={handleBuyOrder}>
          Buy Now
        </button>
        <button className="close-button" id="cart-close" onClick={toggleCart}>
          Close Cart
        </button>
      </div> */}
    </>
  );
}

export default Navbar;
