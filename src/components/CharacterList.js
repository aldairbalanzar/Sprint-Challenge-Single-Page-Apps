import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';

export default function CharacterList() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
    .then(res => {
      console.log("here are your characters, ma dude", res.data.results);
      setData(res.data.results);
    })
    .catch(err => {
      console.log("no characters...", err);
    })
  }, []);

  return (
    <section className="character-list">
      {data.map(character => {
            console.log(character);
            return(
            <CharacterCard character={character}/>
            )
        })}
    </section>
  );
}

