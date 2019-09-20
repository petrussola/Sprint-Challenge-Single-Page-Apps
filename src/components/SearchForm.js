import React, { useState, useEffect } from "react";

import axios from "axios";
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

  return (
    <div>
      <Formik
        initialValues='' 
        onSubmit={searchResults}
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
    </div>
  );
}
