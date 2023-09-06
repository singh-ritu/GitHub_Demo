import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Repositories(props) {
  const [reposList, setReposList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(props.repositoriesUrl);
        setReposList(result.data);
      } catch (error) {
        console.error("Error fetching followers:", error);
      }
    })();
  }, [props.repositoriesUrl]);

  return (
    <div>
      <h2>Repositories :</h2>
      <ul>
        {reposList.length === 0
          ? "No Repository Found"
          : reposList.map((repository) => (
              <div key={repository.id}>
                <a href={repository.html_url} target="_blank" rel="noreferrer">
                  {repository.name}
                </a>
              </div>
            ))}
      </ul>
    </div>
  );
}
export default Repositories;
