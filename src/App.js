import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FunctionGreet from "./components/FunctionGreet";
import ClassGreet from "./components/ClassGreet";
import Post from "./components/Post";
import { CardColumns } from "reactstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FunctionGreet firstName="Ruben" lastName="Somuano" />
        <ClassGreet firstName="Aruro" lastName="Garcia" />
      </header>
      <CardColumns>
        <Post
          imgUrl="https://img2.rtve.es/im/5582775/?w=900"
          title="Digion"
          subtitle="Prueba"
          body="iuhnecfhbrowuv iuwenhrpovewih xhcornhpehpmr cuhnvpowinhvoipew xihcohvciontw"
        >
          {" "}
        </Post>
      </CardColumns>
    </div>
  );
}
export default App;
