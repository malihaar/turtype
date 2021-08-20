import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Thebody from "./components/Thebody";

import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Thebody>

      </Thebody>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
