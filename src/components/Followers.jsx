import React, { useEffect, useState } from "react";
import axios from "axios";
function Followers(props) {
  const [followersList, setFollowersList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(props.followersUrl);
        setFollowersList(result.data);
      } catch (error) {
        console.error("Error fetching followers:", error);
      }
    })();
  }, [props.followersUrl]);

  return (
    <div>
      <h2>Followers :</h2>
      {followersList.length === 0
        ? "No Followers Found"
        : followersList.map((followers) => (
            <div key={followers.id}>
              <img
                src={followers.avatar_url}
                alt={followers.login}
                style={{ width: "50px", height: "50px" }}
              />
              <a href={followers.html_url} target="_blank" rel="noreferrer">
                {followers.login}
              </a>
            </div>
          ))}
    </div>
  );
}
export default Followers;
