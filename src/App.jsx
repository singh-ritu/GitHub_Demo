import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const fetchData = (e) => {
    // fetch("https://api.github.com/users/singh-ritu")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    e.preventDefault();
    const res = axios.get(`https://api.github.com/users/${username}`);
    console.log(res);
    console.log(username);
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
          <input
            type="text"
            placeholder="Enter a Username..."
            value={username}
            onChange={handleChange}
          />
          <button onClick={fetchData}>Search</button>
        </form>
      </div>
    </div>
  );
}

export default App;
