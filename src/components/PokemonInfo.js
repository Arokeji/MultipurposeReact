import React from "react";
import useFetch from "../hooks/useFetch";
import { ThemeContext } from "../App";

const PokemonInfo = () => {

  const API_URL = "https://pokeapi.co/api/v2/pokemon/charmander";

  const [info] = useFetch(API_URL);

  const theme = React.useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.fontColor }}>
      <p>Character {info ? info.name : null}:</p>

      {info ?
        <div>
          <p>Height: {info.height}</p>
          <p>Weight: {info.weight}</p>
          <img src={info.sprites.front_default} alt={theme.name} />
        </div>
        : <p>Beep boop...</p>
      }

    </div>
  );
}

export default PokemonInfo;
