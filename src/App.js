import React from "react";
import "./App.scss";
import appStyle from "./AppStyle.js";
import Navbar from "./components/parts/Navbar";
import Footer from "./components/parts/Footer";
import Bowl from "./components/elements/Bowl";
import Table from "./components/elements/Table";
import Poster from "./components/elements/Poster";
import Monitor from "./components/elements/Monitor";
import Clock from "./components/elements/Clock";
import Button from "./components/elements/Button";
import Turtle from "./components/elements/Turtle";

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <Poster style={appStyle.stylePoster} content="Remi great" />
        <Button style={appStyle.styleButton} content="New Race" />
        <Clock style={appStyle.styleClock} time="Start" />
        <Table style={appStyle.styleTable} />
        <Monitor style={appStyle.styleMonitor} content="Yeo  great" />
        <Bowl style={appStyle.styleBowl} />
        <Turtle style={appStyle.styleTurtle} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
