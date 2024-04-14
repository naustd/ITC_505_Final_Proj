// CartDrawer.js
import React from "react";
import "./CartDrawer.css"; // Define styles for the cart drawer

const CartDrawer = ({ cart, cartTotal, isCartOpen, setIsCartOpen }) => {
  function handleBuyNowBtn() {
    alert("Your Order Placed Successfully!!!");
  }
  return (
    <div className={`cart-drawer ${isCartOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button className="close-btn" onClick={() => setIsCartOpen(false)}>
          X
        </button>
      </div>
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.title} />
              <div>
                <p>{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.quantity * item.newPrice}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
      <div className="cart-total">Cart Total: ${cartTotal}</div>
      <button className="buy-now" onClick={handleBuyNowBtn}>
        Buy Now
      </button>
    </div>
  );
};

export default CartDrawer;
