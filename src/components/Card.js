// import React from "react";
// import { BsBagHeartFill } from "react-icons/bs";
// import { ShoppingBag } from "react-icons/bx";

// import { IoCloseSharp } from "react-icons/io5";
import "./Card.css";
const Card = ({
  id,
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
  addtoCart,
}) => {
  const product = {
    id: id,
    img: img,
    title: title,
    star: star,
    reviews: reviews,
    prevPrice: prevPrice,
    newPrice: newPrice,
  };
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <button
              className="add-cart"
              onClick={() => {
                addtoCart(product);
              }}
            >
              {" "}
              Add to Cart{" "}
            </button>
            {/* <BsBagHeartFill className="add-cart" /> */}
            {/* <button onClick={() => handleClick({ img, title, newPrice })}>
              Add To Cart
            </button> */}
            {/* <Button variant="contained">Add To Cart</Button>{" "} */}
          </section>
        </div>
      </section>
      {/* <div className="cart">
        <div className="cart-content"></div>
        <div className="total">
          <div className="total-title">Total</div>
          <div className="total-price">$0</div>
        </div>
        <button type="button" className="btn-buy">
          Buy Now
        </button>
        <IoCloseSharp />
      </div> */}
    </>
  );
};

export default Card;
