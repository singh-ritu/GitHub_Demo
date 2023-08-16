import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="Heading">
        <h1>GITHUB VIEWER</h1>
      </div>
      <div className="Navigation_btns">
        <button className="btns">HOME</button>
        <button className="btns">REPOSITORIES</button>
        <button className="btns">GIST</button>
        <button className="btns">FOLLOWERS</button>
      </div>
    </div>
  );
}

export default App;
