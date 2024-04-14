// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginDialog from "./components/LoginDialog";
import About from "./components/About";
import Home from "./components/Home/Home";
import Shop from "./components/Shop";
import "./index.css";
import Contact from "./components/Contact";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  // const [loginOpen, setLoginOpen] = useState(false);   //This is used for Dialog boxes
  // const openLoginDialog = () => {
  //   setLoginOpen(true);
  // };
  // const closeLoginDialog = () => {
  //   setLoginOpen(false);
  // };
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div className="App">
      {/* <Navbar onLoginClick={openLoginDialog} /> */}
      {/* <LoginDialog open={loginOpen} onClose={closeLoginDialog} /> */}

      <Router>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/LoginDialog" element={<LoginDialog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
