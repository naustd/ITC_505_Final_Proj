// import React, { useState } from "react";
// import axios from "axios";
// import "./LoginDialog.css";
// import user_icon from "./Assets/person.png";
// import email_icon from "./Assets/email.png";
// import password_icon from "./Assets/password.png";

// function LoginDialog() {
//   const [action, setAction] = useState("Login");
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/signup/saveDetails",
//         formData
//       );
//       console.log("Signup Successful!", response.data);
//     } catch (error) {
//       console.error("Signup failed!", error.response.data);
//     }
//   };

//   return (
//     <div className="login">
//       <div className="header">
//         <div className="text">{action}</div>
//         <div className="underline"></div>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div className="inputs">
//           {action === "Login" ? null : (
//             <div className="userInput">
//               <div>
//                 <img src={user_icon} alt="" />
//               </div>
//               <div className="input">
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           )}
//           <div className="userInput">
//             <div>
//               <img src={email_icon} alt="" />
//             </div>
//             <div className="input">
//               <input
//                 type="email"
//                 placeholder="Email Id"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//           <div className="userInput">
//             <div>
//               <img src={password_icon} alt="" />
//             </div>
//             <div className="input">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="submit-container">
//           <button
//             type="button"
//             className={action === "Login" ? "submit gray" : "submit"}
//             onClick={() => {
//               setAction("Sign Up");
//             }}
//           >
//             Sign Up
//           </button>
//           <button
//             type="button"
//             className={action === "Sign Up" ? "submit gray" : "submit"}
//             onClick={() => {
//               setAction("Login");
//             }}
//           >
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default LoginDialog;

//Old Code..
// import React, { useState } from "react";
// // import axios from "axios";
// import "./LoginDialog.css";
// import user_icon from "./Assets/person.png";
// import email_icon from "./Assets/email.png";
// import password_icon from "./Assets/password.png";
// // This Code is for the dialog boxes.
// // function LoginDialog({ open, onClose }) {
// //   return (
// //     <div style={{ display: open ? "block" : "none" }}>
// //       <div>Login Form</div>
// //       <button onClick={onClose}>Close</button>
// //     </div>
// //   );
// // }
// function LoginDialog() {
//   const [action, setAction] = useState("Login");

//   // const [formData, setFormData] = useState({
//   //   username: "",
//   //   email: "",
//   //   password: "",
//   // });

//   // //Funtion to handle form input change
//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData((prevState) => ({
//   //     ...prevState,
//   //     [name]: value,
//   //   }));
//   // };
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await axios.post(
//   //       "http://localhost:8080/signup/saveDetails",
//   //       formData
//   //     );
//   //     console.log("Signup Successful!", response.data);
//   //   } catch (error) {
//   //     console.error("Signup failed!", error.response.data);
//   //   }
//   // };
//   return (
//     <div className="login">
//       <div className="header">
//         <div className="text">{action}</div>
//         <div className="underline"></div>
//       </div>

//       <div className="inputs">
//         {action === "Login" ? (
//           <div></div>
//         ) : (
//           <div className="userInput">
//             <div>
//               <img src={user_icon} alt="" />
//             </div>
//             <div className="input">
//               <input type="text" placeholder="Name" name="username" />
//             </div>
//           </div>
//         )}

//         <div className="userInput">
//           <div>
//             <img src={email_icon} alt="" />
//           </div>
//           <div className="input">
//             <input type="email" placeholder="Email Id" name="email" />
//           </div>
//         </div>
//         <div className="userInput">
//           <div>
//             <img src={password_icon} alt="" />
//           </div>
//           <div className="input">
//             <input type="password" placeholder="Password" name="password" />
//           </div>
//         </div>
//       </div>
//       <div className="submit-container">
//         <button
//           type="submit"
//           className={action === "Login" ? "submit gray" : "submit"}
//           onClick={() => {
//             setAction("Sign Up");
//           }}
//         >
//           Sign Up
//         </button>
//         <button
//           type="submit"
//           className={action === "Sign Up" ? "submit gray" : "submit"}
//           onClick={() => {
//             setAction("Login");
//           }}
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }

// export default LoginDialog;

//New Code -- Working with register page
// import React, { useState } from "react";
// import axios from "axios";
// import "./LoginDialog.css";
// import user_icon from "./Assets/person.png";
// import email_icon from "./Assets/email.png";
// import password_icon from "./Assets/password.png";

// function LoginDialog() {
//   const [action, setAction] = useState("Login");
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:8000/auth/register",
//         formData
//       );
//       if (response && response.data) {
//         console.log("Registration Successful!", response.data);
//       } else {
//         console.error("No data received from the server");
//         // Optionally, you can handle the case where no data is received from the server.
//       }
//       // Optionally, you can handle the response here, such as showing a success message or redirecting the user.
//     } catch (error) {
//       console.error("Registration failed!", error.response.data);
//       // Optionally, you can handle errors here, such as showing an error message to the user.
//     }
//   };

//   return (
//     <div className="login">
//       <div className="header">
//         <div className="text">{action}</div>
//         <div className="underline"></div>
//       </div>

//       <form className="inputs" onSubmit={handleSubmit}>
//         {action === "Login" ? (
//           <div></div>
//         ) : (
//           <div className="userInput">
//             <div>
//               <img src={user_icon} alt="" />
//             </div>
//             <div className="input">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//         )}

//         <div className="userInput">
//           <div>
//             <img src={email_icon} alt="" />
//           </div>
//           <div className="input">
//             <input
//               type="email"
//               placeholder="Email Id"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="userInput">
//           <div>
//             <img src={password_icon} alt="" />
//           </div>
//           <div className="input">
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="submit-container">
//           <button
//             type="submit"
//             className={action === "Login" ? "submit gray" : "submit"}
//             onClick={() => {
//               setAction("Sign Up");
//             }}
//           >
//             Sign Up
//           </button>
//           <button
//             type="button"
//             className={action === "Sign Up" ? "submit gray" : "submit"}
//             onClick={() => {
//               setAction("Login");
//             }}
//           >
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default LoginDialog;

//Test Code
import React, { useState } from "react";
import axios from "axios";
import "./LoginDialog.css";
import user_icon from "./Assets/person.png";
import email_icon from "./Assets/email.png";
import password_icon from "./Assets/password.png";

function LoginDialog() {
  const [action, setAction] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (action === "Login") {
        response = await axios.post(
          "http://localhost:8000/auth/login",
          formData
        );
        console.log("Login Successful!", response.data);
      } else {
        response = await axios.post(
          "http://localhost:8000/auth/register",
          formData
        );
        console.log("Registration Successful!", response.data);
      }

      // Optionally, you can handle the response here, such as showing a success message or redirecting the user.
    } catch (error) {
      console.error("Operation failed!");
      // Optionally, you can handle errors here, such as showing an error message to the user.
    }
  };

  return (
    <div className="login">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <form className="inputs" onSubmit={handleSubmit}>
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="userInput">
            <div>
              <img src={user_icon} alt="" />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Name"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        <div className="userInput">
          <div>
            <img src={email_icon} alt="" />
          </div>
          <div className="input">
            <input
              type="email"
              placeholder="Email Id"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="userInput">
          <div>
            <img src={password_icon} alt="" />
          </div>
          <div className="input">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="submit-container">
          <button
            type="submit"
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
              alert("Hello, User You have registered successfully!!");
            }}
          >
            Sign Up
          </button>
          <button
            type="button"
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
              alert("Hello, User You have logged in successfully!!");
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginDialog;
