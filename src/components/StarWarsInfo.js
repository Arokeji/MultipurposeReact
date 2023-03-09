import React from "react";
import useFetch from "../hooks/useFetch";
import { ThemeContext } from "../App";

const StarwarsInfo = () => {

  const API_URL = "https://swapi.dev/api/people/3";

  const [info] = useFetch(API_URL);

  const theme = React.useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.fontColor }}>
      <p>Character {info ? info.name : null}:</p>

      {info ?
        <div>
          <p>Height: {info.height}</p>
          <p>Weight: {info.mass}</p>
          <p>Eyes color: {info.eye_color}</p>
          <p>Hair color: {info.hair_color}</p>
        </div>
        : <p>Beep boop...</p>
      }
    </div>
  );
}

export default StarwarsInfo;
