import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm'
import CharacterCard from './CharacterCard';
import axios from 'axios';

export default function CharacterList() {
  const [data, setData] = useState([]);

  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
    .then(res => {
      console.log("axios response:", res.data.results);
      const characters = res.data.results;
      const results = characters.filter(character => character.name.toLowerCase().includes(search.toLowerCase()));
        console.log('characters:', results);
      setData(results);
    })
    .catch(err => {
      console.log("no characters...", err);
    });
  }, [search]);

  const handleSearch = e => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <section className="character-list">
      <Link to='/'>
        <div>Home</div>
      </Link>
      <SearchForm search={search} handleSearch={handleSearch}/>
      {data.map(character => {
            console.log(character);
            return(
            <CharacterCard key={character.id} character={character}/>
            )
        })}
    </section>
  );
}

