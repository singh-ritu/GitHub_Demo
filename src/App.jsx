import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const fetchData = () => {
    fetch("https://api.github.com/users/singh-ritu")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div className="Heading">
        <h1>GITHUB VIEWER</h1>
      </div>
      <div className="buttons">
        <button>HOME</button>
        <button>REPOSITORIES</button>
        <button>GIST</button>
        <button>FOLLOWERS</button>
      </div>
      <div>
        <form className="search-user">
          <input type="text" placeholder="Enter a Username..." />
          <button onClick={fetchData}>Search</button>
        </form>
      </div>
    </div>
  );
}

export default App;
