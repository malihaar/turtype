import "./App.scss";
import appStyle from "./config/AppStyle.js";
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
        <Navbar />
        <div className="body">
          <Poster
            style={appStyle.stylePoster}
            width={25}
            height={35}
            content={content}
          />
          <Button
            style={appStyle.styleButton}
            width={9}
            height={3}
            content="New Race"
          />
          <Clock
            style={appStyle.styleClock}
            width={12}
            height={12}
            time="Start"
          />
          <Table style={appStyle.styleTable} width={77} height={20}/>
          <Monitor
            style={appStyle.styleMonitor}
            width={30}
            height={37}
            content="Yeo great"
          />
          <Bowl style={appStyle.styleBowl} width={8} height={8} wpm="100" />
          <Turtle style={appStyle.styleTurtle} width={8} height={10} />
        </div>
        <div className="smallScreen">
          <div className="buy fredokaOne">BUY BIGGER SCREEN</div>
          <Turtle style={appStyle.styleSmall} width={80} height={35} />
        </div>
        <Footer />
      </div>
    );
}

export default App;
