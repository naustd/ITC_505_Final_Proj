// import React, { useState } from "react";
// import { useEffect } from "react";
// import "./CartItems.css";
// const CartItems = ({ cart, setCart, handleChange }) => {
//   const [price, setPrice] = useState(0);
//   const handlePrice = () => {
//     let ans = 0;
//     cart.map((item) => (ans += item.amount * item.price));
//     setPrice(ans);
//   };
//   const handleRemove = (id) => {
//     const arr = cart.filter((item) => item.id !== id);
//     setCart(arr);
//     // handlePrice();
//   };

//   useEffect(() => {
//     handlePrice();
//   });
//   return (
//     <>
//       <article>
//         {cart?.map((item) => (
//           <div className="cart_box" key={item.id}>
//             <div className="cart_img">
//               <img src={item.img} />
//               <p>{item.title}</p>
//             </div>
//             <div>
//               <button onClick={() => handleChange(item, +1)}> + </button>
//               <button>{item.amount}</button>
//               <button onClick={() => handleChange(item, -1)}> - </button>
//             </div>
//             <div>
//               <span>{item.price}</span>
//               <button onClick={() => handleRemove(item.id)}>Remove</button>
//             </div>
//           </div>
//         ))}
//         <div className="total">
//           <span>Total Price of your Cart</span>
//           <span>Rs - {price}</span>
//         </div>
//       </article>
//     </>
//   );
// };

// export default CartItems;

// import React, { useState } from "react";
// import "./App.css"; // Import your CSS file
// import Card from "./Card";
// function CartItems() {
//   const [cartActive, setCartActive] = useState(false);
//   const [itemsAdded, setItemsAdded] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

//   const toggleCart = () => {
//     setCartActive(!cartActive);
//   };

//   const handleAddCartItem = (product) => {
//     const newItem = {
//       title: product.querySelector(".card-title").innerHTML,
//       price: parseFloat(
//         product.querySelector(".price").innerHTML.replace("$", "")
//       ),
//       imgSrc: product.querySelector(".card-img").src,
//     };

//     if (itemsAdded.find((el) => el.title === newItem.title)) {
//       alert("This Item Is Already Exist!");
//       return;
//     }

//     setItemsAdded([...itemsAdded, newItem]);
//     setTotalPrice(totalPrice + newItem.price);
//   };

//   const handleRemoveCartItem = (title) => {
//     const removedItem = itemsAdded.find((item) => item.title === title);
//     setItemsAdded(itemsAdded.filter((item) => item.title !== title));
//     setTotalPrice(totalPrice - removedItem.price);
//   };

//   const handleCartItemQuantityChange = (title, quantity) => {
//     const updatedItems = itemsAdded.map((item) => {
//       if (item.title === title) {
//         return { ...item, quantity: parseInt(quantity) };
//       }
//       return item;
//     });
//     setItemsAdded(updatedItems);
//     // You might want to recalculate the total price based on quantity changes
//   };

//   const handleBuyOrder = () => {
//     if (itemsAdded.length <= 0) {
//       alert("There is No Order to Place Yet! \nPlease Make an Order first.");
//       return;
//     }
//     alert("Your Order is Placed Successfully :)");
//     setItemsAdded([]);
//     setTotalPrice(0);
//   };

//   return (
//     <div>
//       <header>
//         <div className="nav container">
//           {/* <a href="#" className="logo">
//             <span>E</span>Commerce
//           </a> */}

//           <div className={`cart ${cartActive ? "active" : ""}`}>
//             <h2 className="cart-title">Your Cart</h2>
//             <div className="cart-content">
//               {itemsAdded.map((item, index) => (
//                 <div key={index} className="cart-box">
//                   <img src={item.imgSrc} alt="" className="cart-img" />
//                   <div className="detail-box">
//                     <div className="cart-product-title">{item.title}</div>
//                     <div className="cart-price">${item.price.toFixed(2)}</div>
//                     <input
//                       type="number"
//                       value="1"
//                       className="cart-quantity"
//                       onChange={(e) =>
//                         handleCartItemQuantityChange(item.title, e.target.value)
//                       }
//                     />
//                   </div>
//                   <button
//                     className="remove-button"
//                     onClick={() => handleRemoveCartItem(item.title)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//             </div>
//             <div className="total">
//               <div className="total-title">Total</div>
//               <div className="total-price">${totalPrice.toFixed(2)}</div>
//             </div>
//             <button type="button" className="btn-buy" onClick={handleBuyOrder}>
//               Buy Now
//             </button>
//             <button
//               className="close-button"
//               id="cart-close"
//               onClick={toggleCart}
//             >
//               Close Cart
//             </button>
//           </div>
//         </div>
//       </header>

//       <Card />
//     </div>
//   );
// }

// export default CartItems;
import React from "react";

export default function CartItems() {
  return <div>CartItems</div>;
}
