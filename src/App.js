import React from "react";
import "./App.scss";
import Navbar from "./components/parts/Navbar";
import TheBody from "./components/parts/Thebody";
import Footer from "./components/parts/Footer";
import Turtle from "./components/elements/Turtle";


function App() {
    const style = {width: '150px', height: '75px', marginTop: '50px', marginLeft: '50px'}

    return (
        <div className="App">
            <Navbar/>
            <Turtle style={style}/>
            <TheBody/>
            <Footer/>
        </div>
    );
}

export default App;
