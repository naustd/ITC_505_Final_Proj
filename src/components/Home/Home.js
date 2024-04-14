import React from "react";
import Advertisement from "../Advertisement/Advertisement";
// import Blog from "../Blog/Blog";
import Brands from "../Brands/Brands";
import DisplaySection from "../DisplaySection/DisplaySection";
import FeatureProducts from "../FeatureProducts/FeatureProducts";
import Footer from "../Footer/Footer";

// import TopSell from "../TopSell/TopSell";

const Home = () => {
  return (
    <div>
      <DisplaySection />
      <FeatureProducts />
      <Advertisement />
      {/* <TopSell /> */}
      {/* <Blog /> */}
      <Brands />
      <Footer />
    </div>
  );
};

export default Home;
