import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterList from "./CharacterList";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function SearchForm({
  searchResults,
  searchTerm,
  setSearchTerm,
  searchCharacterList,
  setSearchCharacterList,
  searchError,
  setsearchError
}) {
  
  const searchCharacters = (formValues) => {
    const searchAPI = `https://rickandmortyapi.com/api/character/?name=${formValues.search}`;
    setSearchTerm(formValues.search)
    axios
      .get(searchAPI)
      .then(res => {
        setsearchError('');
        setSearchCharacterList(res.data.results);
      })
      .catch(error => {
        setsearchError(error.response.data.error)
      });
  };

  return (
    <div>
      <Formik
        initialValues=''
        onSubmit={searchCharacters}
        render={props => {
          return (
            <Form>
              <Field name="search" type="text" placeholder="search" />
              <button type='submit'>Search now</button>
            </Form>
          );
        }}
      />
      {
        searchError && <div>{searchError} -  we could not find a character called {searchTerm}</div>
      }
      <div>{ }</div>
      <CharacterList characterList={searchCharacterList} />
    </div>
  );
}
