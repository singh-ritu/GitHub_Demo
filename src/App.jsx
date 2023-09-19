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
    // fetch("https://api.github.com/users/singh-ritu")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
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
        <button onClick={() => setButtonText("Home")}>HOME</button>
        <button
          onClick={() => setButtonText("Repositories")}
          disabled={!githubUser.login}
        >
          REPOSITORIES
        </button>
        <button
          onClick={() => setButtonText("Gist")}
          disabled={!githubUser.login}
        >
          GIST
        </button>
        <button
          onClick={() => setButtonText("Follower")}
          disabled={!githubUser.login}
        >
          FOLLOWERS
        </button>
      </div>
      <div>
        {buttonText === "Home" && (
          <form className="search-user">
            <input
              type="text"
              placeholder="Enter a Username..."
              value={username}
              onChange={handleChange}
            />
            <button onClick={fetchData}>Search</button>
          </form>
        )}
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
// {
//   "login": "singh-ritu",
//   "id": 82505170,
//   "node_id": "MDQ6VXNlcjgyNTA1MTcw",
//   "avatar_url": "https://avatars.githubusercontent.com/u/82505170?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/singh-ritu",
//   "html_url": "https://github.com/singh-ritu",
//   "followers_url": "https://api.github.com/users/singh-ritu/followers",
//   "following_url": "https://api.github.com/users/singh-ritu/following{/other_user}",
//   "gists_url": "https://api.github.com/users/singh-ritu/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/singh-ritu/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/singh-ritu/subscriptions",
//   "organizations_url": "https://api.github.com/users/singh-ritu/orgs",
//   "repos_url": "https://api.github.com/users/singh-ritu/repos",
//   "events_url": "https://api.github.com/users/singh-ritu/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/singh-ritu/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Ritu ",
//   "company": null,
//   "blog": "",
//   "location": null,
//   "email": null,
//   "hireable": null,
//   "bio": "Hey there 👋\r\nI'm  Ritu , a coding enthusiast and technology explorer. 🌱\r\nAs a beginner , I'm on an enchanting journey to learn and grow. ",
//   "twitter_username": null,
//   "public_repos": 7,
//   "public_gists": 0,
//   "followers": 0,
//   "following": 0,
//   "created_at": "2021-04-14T09:05:59Z",
//   "updated_at": "2023-08-17T07:31:32Z"
// }
