import React from "react";
import Navbar from "./sections/Navbar";
import Banner from "./sections/Banner";
import Introduction from "./sections/Introduction";
import Destination from "./sections/Destination";
import "./styles/css/index.css";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Introduction />
      <Destination />
    </>
  );
}

export default App;
