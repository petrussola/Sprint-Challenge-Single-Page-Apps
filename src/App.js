import React, { useState, useEffect } from "react";
import { Route, Link} from 'react-router-dom';


import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import SearchForm from './components/SearchForm';

import axios from 'axios';

export default function App() {

// TWO SLICES OF STATE, ONE FOR THE LIST OF CHARACTERS AND ANOTHER ONE FOR THE SERVER ERROR
const [characterList, setCharacterList] = useState([]);
const [serverError, setServerError] = useState('');
const [searchTerm, setSearchTerm] = useState("morty");
const [searchCharacterList, setSearchCharacterList] = useState([]);
const [searchError, setsearchError] = useState('');

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

// FUNCTION THAT SETS CHARACTER LIST TO SEARCH RESULTS

const searchResults = (data) => {
  console.log(data)
}

  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' render={ props => {return <CharacterList {...props} characterList={characterList} serverError={serverError}/>}}/>
    <Route path='/search' render={ props => {return <SearchForm {...props} 
  // searchResults={searchResults} 
  setCharacterList={setCharacterList} 
  searchTerm={searchTerm} 
  setSearchTerm={setSearchTerm} 
  searchCharacterList={searchCharacterList}
  setSearchCharacterList={setSearchCharacterList}
  searchError={searchError}
  setsearchError={setsearchError}
  />} } />
    </main>
  );
}
