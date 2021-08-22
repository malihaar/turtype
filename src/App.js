import React from "react";
import "./App.scss";
import Navbar from "./components/parts/Navbar";
import TheBody from "./components/parts/Thebody";
import Footer from "./components/parts/Footer";
import Bowl from "./components/elements/Bowl";


function App() {
    const style = {width: '150px', height: '75px', marginTop: '50px', marginLeft: '50px'}

    return (
        <div className="App">
            <Navbar/>
            <Bowl style={style} wpm="100"/>
            <TheBody/>
            <Footer/>
        </div>
    );
}

export default App;
