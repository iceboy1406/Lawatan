import React, { useEffect } from "react";
import Navbar from "./sections/Navbar";
import Banner from "./sections/Banner";
import Introduction from "./sections/Introduction";
import Destination from "./sections/Destination";
import Blog from "./sections/Blog";
import Testimonial from "./sections/Testimonial";
import "./styles/css/index.css";
import ExploreNow from "./sections/ExploreNow";
import Footer from "./sections/Footer";
import Preloader from "./sections/Preloader";
function App() {
  useEffect(() => {
    setTimeout(() => {
      document.body.style = "";
      document.querySelector("#preloader").style = "display:none";
    }, 3000);
  }, []);
  return (
    <>
      <Preloader />
      <Navbar />
      <Banner />
      <Introduction />
      <Destination />
      <Blog />
      <Testimonial />
      <ExploreNow />
      <Footer />
    </>
  );
}

export default App;
