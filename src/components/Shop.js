// import "./Shop.css";
// import { useState, useEffect } from "react";
// import Products from "../products/Products";
// import products from "../db/Db";
// import Recommended from "../Recommended/Recommended";
// import Sidebar from "../sidebar/Sidebar";
// import Card from "./Card";
// import { FaCartShopping } from "react-icons/fa6";
// import { IoCloseSharp } from "react-icons/io5";
// // import CartDrawer from "./cartDrawer";
// import CartDrawer from "./CartDrawer";
// // import Navbar from "./Navbar";
// function Shop() {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   // ----------- Input Filter -----------
//   const [query, setQuery] = useState("");
//   const [cart, setCart] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(true);
//   const [cartTotal, setCartTotal] = useState(0);

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const filteredItems = products.filter(
//     (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
//   );

//   // ----------- Radio Filtering -----------
//   const handleChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   // ------------ Button Filtering -----------
//   const handleClick = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   function filteredData(products, selected, query) {
//     let filteredProducts = products;

//     // Filtering Input Items
//     if (query) {
//       filteredProducts = filteredItems;
//     }

//     // Applying selected filter
//     if (selected) {
//       filteredProducts = filteredProducts.filter(
//         ({ category, color, company, newPrice, title }) =>
//           category === selected ||
//           color === selected ||
//           company === selected ||
//           newPrice === selected ||
//           title === selected
//       );
//     }

//     return filteredProducts.map(
//       ({ id, img, title, star, reviews, prevPrice, newPrice }) => (
//         <Card
//           key={Math.random()}
//           id={id}
//           img={img}
//           title={title}
//           star={star}
//           reviews={reviews}
//           prevPrice={prevPrice}
//           newPrice={newPrice}
//           addtoCart={(value) => {
//             console.log("first", value);
//             const existingItemIndex = cart.findIndex(
//               (item) => item.id === value.id
//             ); // Find the index of the item in the cart

//             if (existingItemIndex >= 0) {
//               // If the item already exists in the cart, create a new cart array with the item's quantity increased by 1
//               const newCart = cart.map((item, index) => {
//                 if (index === existingItemIndex) {
//                   return { ...item, quantity: item.quantity + 1 }; // Increase quantity
//                 }
//                 return item; // Return all other items unchanged
//               });

//               setCart(newCart);
//             } else {
//               // If the item does not exist in the cart, add it with a quantity of 1
//               setCart([...cart, { ...value, quantity: 1 }]);
//             }
//           }}
//         />
//       )
//     );
//   }

//   useEffect(() => {
//     let total = 0;
//     cart.forEach((product) => {
//       total += product.newPrice * product.quantity;
//     });
//     setCartTotal(total);
//   }, [cart]);
//   const result = filteredData(products, selectedCategory, query);

//   return (
//     <>
//       <div className="heading">
//         <h1>Shop Now</h1>
//         <FaCartShopping className="cart-icon" />

//         {/* <div className="cart">
//           <button
//             className=""
//             onClick={() => {
//               setIsCartOpen(!isCartOpen);
//             }}
//           >
//             Cart
//           </button>
//           <IoCloseSharp className="cart-close" />
//           {cart.length > 0 ? (
//             cart.map((item) => (
//               <div key={item.id}>
//                 <span>{item.img}</span>
//                 <span>{item.title}</span> -{" "}
//                 <span>Quantity: {item.quantity}</span> -{" "}
//                 <span>price: {item.quantity * item.newPrice}</span>
//               </div>
//             ))
//           ) : (
//             <p>No items in the cart.</p>
//           )}
//           Cart Total- {cartTotal}
//           <button type="button" className="buy-now">
//             Buy Now
//           </button>
//         </div> */}
//       </div>
//       <Sidebar handleChange={handleChange} />

//       <Recommended handleClick={handleClick} />
//       <Products result={result} />
//     </>
//   );
// }
// export default Shop;

//New Code
// Shop.js
import React, { useState, useEffect } from "react";
import "./Shop.css";
import Products from "../products/Products";
import products from "../db/Db";
import Recommended from "../Recommended/Recommended";
import Sidebar from "../sidebar/Sidebar";
import Card from "./Card";
import { FaShoppingCart } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import CartDrawer from "./CartDrawer";

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // Initially closed
  const [cartTotal, setCartTotal] = useState(0);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ id, img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          id={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          addtoCart={(value) => {
            const existingItemIndex = cart.findIndex(
              (item) => item.id === value.id
            );

            if (existingItemIndex >= 0) {
              const newCart = cart.map((item, index) => {
                if (index === existingItemIndex) {
                  return { ...item, quantity: item.quantity + 1 };
                }
                return item;
              });

              setCart(newCart);
            } else {
              setCart([...cart, { ...value, quantity: 1 }]);
            }
          }}
        />
      )
    );
  }

  useEffect(() => {
    let total = 0;
    cart.forEach((product) => {
      total += product.newPrice * product.quantity;
    });
    setCartTotal(total);
  }, [cart]);

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <div className="heading">
        <h1>Shop Now</h1>
        <FaShoppingCart
          className="cart-icon"
          onClick={() => setIsCartOpen(!isCartOpen)}
        />
      </div>
      <Sidebar handleChange={handleChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
      <CartDrawer
        cart={cart}
        cartTotal={cartTotal}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
    </>
  );
}

export default Shop;
