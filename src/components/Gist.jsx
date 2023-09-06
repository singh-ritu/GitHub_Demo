import axios from "axios";
import React, { useEffect, useState } from "react";

function Gist(props) {
  const [gistList, setGistList] = useState([]);

  useEffect(() => {
    (async () => {
      if (props.gistUrl) {
        try {
          const result = await axios.get(props.gistUrl);
          setGistList(result.data);
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
        {gistList.length === 0
          ? "No Gist Found"
          : gistList.map((gist) => (
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
