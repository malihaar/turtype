import React from "react";
import "./App.scss";
import Navbar from "./components/parts/Navbar";
import Thebody from "./components/parts/Thebody";
import Footer from "./components/parts/Footer";
import Button from "./components/elements/Button";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Thebody>
        
        halo
      </Thebody>
      <Button content="Halo"/>
      <Footer />
    </div>
  );
}

export default App;
