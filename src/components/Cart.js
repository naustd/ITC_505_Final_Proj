// // // export default Cart;
// import React, { useState } from "react";
// import Amazon from "./Amazon";
// import CartItems from "../components/CartItems";
// import "./Cart.css";
// const Cart = () => {
//   //const [show, setShow] = useState(true);
//   const [cart, setCart] = useState([]);
//   //const [warning, setWarning] = useState(false);
//   const handleClick = (item) => {
//     let isPresent = false;
//     cart.forEach((product) => {
//       if (item.id === product.id) isPresent = true;
//     });
//     // if (isPresent) {
//     //   setWarning(true);
//     //   setTimeout(() => {
//     //     setWarning(false);
//     //   }, 2000);
//     //   // return;
//     // }
//     setCart([...cart, item]);
//   };
//   const handleChange = (item, d) => {
//     let ind = -1;
//     cart.forEach((data, index) => {
//       if (data.id === item.id) ind = index;
//     });
//     const tempArr = cart;
//     tempArr[ind].amount += d;

//     if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
//     setCart([...tempArr]);
//   };
//   return (
//     // <React.Fragment>
//     //   {show ? (
//     //     <Amazon handleClick={handleClick} />
//     //   ) : (
//     //     <CartItems cart={cart} setCart={setCart} handleChange={handleChange} />
//     //   )}
//     //   {warning && (
//     //     <div className="warning">Item is already added to your cart</div>
//     //   )}
//     // </React.Fragment>
//     <div>
//       <div className="heading">
//         <h1>Shopping Cart</h1>
//         {/* <p>Organic foods makes lives healthy.</p> */}
//       </div>
//       <Amazon handleClick={handleClick} />
//       <CartItems cart={cart} setCart={setCart} handleChange={handleChange} />
//     </div>
//   );
// };

// export default Cart;

// // import React from "react";

// // export default function Cart() {
// //   return <div></div>;
// // }

import React from "react";
import { IoCloseSharp } from "react-icons/io5";
export default function () {
  return (
    <div class="cart">
      <div class="cart-content"></div>

      <div class="total">
        <div class="total-title">Total</div>
        <div class="total-price">$0</div>
      </div>

      <button type="button" class="btn-buy">
        Buy Now
      </button>
      <IoCloseSharp />
    </div>
  );
}
