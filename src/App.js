import React from "react";
import "./App.css";
import Header from "./components/Header";
import Browse from "./components/Browse";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";
// import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      {/* <Shop /> */}
      {/* <Menu /> */}
      {/* <Clients /> */}
      <Prices />
      <Browse />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
