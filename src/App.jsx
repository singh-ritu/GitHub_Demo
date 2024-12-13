import { useState } from "react";

import "./App.css";
import axios from "axios";
import Home from "./components/Home";
import Repositories from "./components/Repositories";
import Gist from "./components/Gist";
import Followers from "./components/Followers";

function App() {
  const [username, setUsername] = useState("");
  const [githubUser, setGithubUser] = useState({});
  const [buttonText, setButtonText] = useState("Home");
  const [reposList, setReposList] = useState([]);
  const [gistList, setGistList] = useState([]);
  const [followersList, setFollowersList] = useState([]);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const fetchData = async (e) => {
    e.preventDefault();
    const res = await axios.get(`https://api.github.com/users/${username}`);
    console.log(res);
    console.log(username);
    setGithubUser(res.data);
  };
  const handleRepositories = (e) => {
    setReposList(e);
  };
  const handleGist = (e) => {
    setGistList(e);
  };
  const handleFollowers = (e) => {
    setFollowersList(e);
  };
  return (
    <div>
      <div className="Heading">
        <h1>GITHUB VIEWER</h1>
      </div>
      <div className="buttons">
        <button onClick={() => setButtonText("Home")} className="nav-btn">
          HOME
        </button>
        <button
          onClick={() => setButtonText("Repositories")}
          disabled={!githubUser.login}
          className="nav-btn"
        >
          REPOSITORIES
        </button>
        <button
          onClick={() => setButtonText("Gist")}
          disabled={!githubUser.login}
          className="nav-btn"
        >
          GIST
        </button>
        <button
          onClick={() => setButtonText("Follower")}
          disabled={!githubUser.login}
          className="nav-btn"
        >
          FOLLOWERS
        </button>
      </div>
      <div>
        <div className="search-bar">
          {buttonText === "Home" && (
            <form className="search-user">
              <input
                type="text"
                placeholder="Enter a Username..."
                value={username}
                onChange={handleChange}
                className="input"
              />
              <button onClick={fetchData}>Search</button>
            </form>
          )}
        </div>
        {buttonText === "Home" && Object.keys(githubUser).length > 0 && (
          <Home
            name={githubUser.login}
            avatar={githubUser.avatar_url}
            userName={githubUser.name}
            userCompany={githubUser.company}
            userFollowers={githubUser.followers}
          />
        )}
        {buttonText === "Repositories" && (
          <Repositories
            repositoriesUrl={githubUser.repos_url}
            handleRepositories={handleRepositories}
            reposList={reposList}
          />
        )}
        {buttonText === "Gist" && (
          <Gist
            gistUrl={githubUser.url + "/gists"}
            handleGist={handleGist}
            gistList={gistList}
          />
        )}
        {buttonText === "Follower" && (
          <Followers
            followersUrl={githubUser.followers_url}
            handleFollowers={handleFollowers}
            followersList={followersList}
          />
        )}
      </div>
    </div>
  );
}

export default App;
