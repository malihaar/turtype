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
import RandomWords from 'random-words'

const content = RandomWords(parseInt(process.env.REACT_APP_SENTENCE_LENGTH))

function App() {
    return (
        <div className="App openSans">
            <Navbar/>
            <div className="body">
                <Poster style={appStyle.stylePoster} content={content}/>
                <Button style={appStyle.styleButton} content="New Race"/>
                <Clock style={appStyle.styleClock} time="Start"/>
                <Table style={appStyle.styleTable}/>
                <Monitor style={appStyle.styleMonitor} content="Yeo  great"/>
                <Bowl style={appStyle.styleBowl}/>
                <Turtle style={appStyle.styleTurtle}/>
            </div>
            <div className="smallScreen">
                <div className="buy fredokaOne">BUY BIGGER SCREEN</div>
                <Turtle style={appStyle.styleSmall}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
