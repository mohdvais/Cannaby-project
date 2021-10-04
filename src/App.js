import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";
import Popular from "./Components/Popular";
import Trending from "./Components/Trending";
import FlashSale from "./Components/FlashSale";
import Body from './Components/Body';
import Footer from "./Footer";
// import login from "./Components/Login";
// import Categories2 from "./Components/Categories2";
// import Deals from "./Components/Deals";
// import Wishlist from "./Components/Wishlist";
// import VapeProduct from "./Components/VapeProduct";
// import Productpage from "./Components/Productpage";
function App() {
  return (
    <>
        <Navbar />
        <Body />
        <div className="title">
        
        <h3 className="a">Categories</h3>
        <h3 className="b">View All</h3>
        
      </div>
      <div className="cat3">
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
      </div>

      <div className="title title1">
        <h3 className="a">Flash sale</h3>
        <h3 className="b">View All</h3>
      </div>
      <div className="cat3 cat4">
        <FlashSale />
        <FlashSale />
        <FlashSale />
        <FlashSale />
        <FlashSale />
      </div>

      <div className="title title1">
        <h3 className="a">Popular today</h3>
        <h3 className="b">View All</h3>
      </div>
      <div className="cat3 cat4">
        <Popular />
        <Popular />
        <Popular />
        <Popular />
        <Popular />
      </div>
      <div className="title title1">
        <h3 className="a">Trending Now</h3>
        <h3 className="b">View All</h3>
      </div>
      <div className="cat3 cat4">
        <Trending />
        <Trending />
        <Trending />
        <Trending />
        <Trending />
      </div>
      {/* <VapeProduct /> */}
      
      
      
      <Footer />
      
    </>
  );
}

export default App;
