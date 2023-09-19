import React, { useEffect, useState } from "react";
import axios from "axios";
function Followers(props) {
  useEffect(() => {
    (async () => {
      // if (props.followersList.lenght === 0) {
      try {
        const result = await axios.get(props.followersUrl);
        props.handleFollowers(result.data);
      } catch (error) {
        console.error("Error fetching followers:", error);
        // }
      }
    })();
  }, [props.followersUrl]);

  return (
    <div>
      <h2>Followers :</h2>
      {props.followersList.length === 0
        ? "No Followers Found"
        : props.followersList.map((followers) => (
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
