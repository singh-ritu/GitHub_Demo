import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Repositories(props) {
  useEffect(() => {
    (async () => {
      if (props.reposList.length === 0) {
        try {
          const result = await axios.get(props.repositoriesUrl);
          props.handleRepositories(result.data);
        } catch (error) {
          console.error("Error fetching followers:", error);
        }
      }
    })();
  }, [props.repositoriesUrl]);

  return (
    <div>
      <h2>Repositories :</h2>
      <ul>
        {props.reposList.length === 0
          ? "No Repository Found"
          : props.reposList.map((repository) => (
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
