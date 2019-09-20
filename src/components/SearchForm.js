import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

const initialSearchValue = {
  search: '',
};

export default function SearchForm({
  searchResults,
  searchTerm,
  searchError,
  clearCharacterList
}) {

  return (
    <div>
      <Formik
        initialValues={initialSearchValue} 
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
        searchTerm ? <div onClick={clearCharacterList}>Reset</div> : null
      }
      {
        searchError && <div>{searchError} -  we could not find a character called {searchTerm}</div>
      }
    </div>
  );
}
