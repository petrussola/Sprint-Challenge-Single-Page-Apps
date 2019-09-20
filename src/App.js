import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';

import axios from 'axios';


export default function App() {

// TWO SLICES OF STATE, ONE FOR THE LIST OF CHARACTERS AND ANOTHER ONE FOR THE SERVER ERROR
const [characterList, setCharacterList] = useState([]);
const [serverError, setServerError] = useState('');

// API URL THAT WE WILL USE LATER ON IN THE AXIOS GET CALL
const api = 'https://rickandmortyapi.com/api/character/';

// WHEN PAGE HAS FINISHED LOADING, WE REQUEST AND GET THE DATA FROM THE API END POINT USING AXIOS

useEffect( () => {
  axios.get(api)
    .then( resp => {
      setCharacterList(resp.data.results);
    })
    .catch( error => {
      setServerError(error.message);
    })
}, [])

  return (
    <main>
      <Header />
      <CharacterList characterList={characterList} />
    </main>
  );
}
