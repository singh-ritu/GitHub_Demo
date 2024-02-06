import axios from "axios";
import React, { useEffect, useState } from "react";

function Gist(props) {
  useEffect(() => {
    (async () => {
      if (props.gistList.length === 0) {
        try {
          const result = await axios.get(props.gistUrl);
          props.handleGist(result.data);
        } catch (error) {
          console.error("Error fetching followers:", error);
        }
      }
    })();
  }, [props.gistUrl]);

  return (
    <div>
      <h2>Gist :</h2>
      <ul>
        {props.gistList.length === 0
          ? "No Gist Found"
          : props.gistList.map((gist) => (
              <div key={gist.id}>
                <a href={gist.html_url} target="_blank" rel="noreferrer">
                  {gist.name}
                </a>
              </div>
            ))}
      </ul>
    </div>
  );
}
export default Gist;
